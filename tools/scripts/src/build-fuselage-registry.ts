#!/usr/bin/env node
/**
 * Generates the machine-readable catalog of `@rocket.chat/fuselage` components
 * consumed by coding agents:
 *
 * - `packages/fuselage/registry.json`
 * - `.claude/skills/fuselage/references/components.md`
 *
 * Both outputs are generated; edit this script instead of editing them.
 */
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';

import ts from 'typescript';

type PropInfo = {
  name: string;
  type: string;
  values?: string[];
  optional: boolean;
  description?: string;
  /** Usage rules written in the component's Storybook `docs.description`. */
  usage?: string;
  deprecated?: string;
};

type Coverage = 'component' | 'group' | 'none';

type ComponentInfo = {
  name: string;
  file: string;
  group: string;
  description?: string;
  /** Usage rules written in the component's Storybook `docs.description`. */
  usage?: string;
  deprecated?: string;
  acceptsProps: boolean;
  props: PropInfo[];
  extends: string[];
  primitive: 'react-aria' | 'none';
  coverage: { stories: Coverage; spec: Coverage; axe: boolean };
};

/** An export as the barrel files expose it: public name, plus where it lives. */
type ExportedComponent = { file: string; localName: string };

const REPO_ROOT = resolve(import.meta.dirname, '../../..');
const PKG_DIR = join(REPO_ROOT, 'packages/fuselage');
const COMPONENTS_DIR = join(PKG_DIR, 'src/components');
const SKILL_DIR = join(REPO_ROOT, '.claude/skills/fuselage');

const MAX_TYPE_LENGTH = 140;

const readSourceFile = (filePath: string) =>
  ts.createSourceFile(
    filePath,
    readFileSync(filePath, 'utf8'),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );

/** Resolves a relative module specifier to the file that backs it. */
const resolveModule = (fromFile: string, specifier: string) => {
  const base = resolve(dirname(fromFile), specifier);

  for (const candidate of [
    `${base}.tsx`,
    `${base}.ts`,
    join(base, 'index.tsx'),
    join(base, 'index.ts'),
  ]) {
    if (existsSync(candidate)) {
      return candidate;
    }
  }

  return undefined;
};

const normalizeType = (text: string) => {
  const collapsed = text.replace(/\s+/g, ' ').trim();

  return collapsed.length > MAX_TYPE_LENGTH
    ? `${collapsed.slice(0, MAX_TYPE_LENGTH - 1)}…`
    : collapsed;
};

const getDocComment = (node: ts.Node) => {
  const comments = ts
    .getJSDocCommentsAndTags(node)
    .flatMap((doc) => (ts.isJSDoc(doc) ? [doc.comment] : []))
    .filter((comment): comment is string => typeof comment === 'string');

  const text = comments.join(' ').replace(/\s+/g, ' ').trim();

  return text || undefined;
};

const getDeprecation = (node: ts.Node) => {
  const tag = ts
    .getJSDocTags(node)
    .find((candidate) => candidate.tagName.text === 'deprecated');

  if (!tag) {
    return undefined;
  }

  return typeof tag.comment === 'string'
    ? tag.comment.replace(/\s+/g, ' ').trim()
    : '';
};

/** String literal unions are the semantic variations agents need to know. */
const getLiteralValues = (typeNode: ts.TypeNode) => {
  if (!ts.isUnionTypeNode(typeNode)) {
    return undefined;
  }

  const values = typeNode.types.flatMap((member) =>
    ts.isLiteralTypeNode(member) && ts.isStringLiteral(member.literal)
      ? [member.literal.text]
      : [],
  );

  return values.length === typeNode.types.length && values.length > 0
    ? values
    : undefined;
};

const unwrap = (typeNode: ts.TypeNode): ts.TypeNode =>
  ts.isParenthesizedTypeNode(typeNode) ? unwrap(typeNode.type) : typeNode;

type FlattenedProps = { props: PropInfo[]; extends: string[] };

const flattenPropsType = (
  typeNode: ts.TypeNode,
  sourceFile: ts.SourceFile,
): FlattenedProps => {
  const node = unwrap(typeNode);

  if (ts.isIntersectionTypeNode(node)) {
    return node.types.reduce<FlattenedProps>(
      (acc, member) => {
        const flattened = flattenPropsType(member, sourceFile);

        return {
          props: [...acc.props, ...flattened.props],
          extends: [...acc.extends, ...flattened.extends],
        };
      },
      { props: [], extends: [] },
    );
  }

  if (ts.isTypeLiteralNode(node)) {
    const props = node.members.flatMap((member) => {
      if (!ts.isPropertySignature(member) || !member.name) {
        return [];
      }

      const typeText = member.type
        ? normalizeType(member.type.getText(sourceFile))
        : 'unknown';

      return [
        {
          name: member.name.getText(sourceFile),
          type: typeText,
          values: member.type
            ? getLiteralValues(unwrap(member.type))
            : undefined,
          optional: Boolean(member.questionToken),
          description: getDocComment(member),
          deprecated: getDeprecation(member),
        },
      ];
    });

    return { props, extends: [] };
  }

  return { props: [], extends: [normalizeType(node.getText(sourceFile))] };
};

const findComponentDeclaration = (
  sourceFile: ts.SourceFile,
  componentName: string,
) => {
  for (const statement of sourceFile.statements) {
    if (
      ts.isFunctionDeclaration(statement) &&
      statement.name?.text === componentName
    ) {
      return statement;
    }

    if (ts.isVariableStatement(statement)) {
      const declaration = statement.declarationList.declarations.find(
        (candidate) =>
          ts.isIdentifier(candidate.name) &&
          candidate.name.text === componentName,
      );

      if (declaration) {
        return statement;
      }
    }
  }

  return undefined;
};

/** The function that actually takes the props, past `memo()` and friends. */
const findFunctionLike = (
  node: ts.Node,
): ts.SignatureDeclaration | undefined => {
  if (ts.isFunctionLike(node)) {
    return node;
  }

  return ts.forEachChild(node, findFunctionLike);
};

const getPropsTypeNode = (
  declaration: ts.Node,
  sourceFile: ts.SourceFile,
): ts.TypeNode | undefined => {
  const parameterType = findFunctionLike(declaration)?.parameters[0]?.type;

  if (!parameterType) {
    return undefined;
  }

  const node = unwrap(parameterType);

  // `({ ... }: ButtonProps)` — follow the alias so its members can be read.
  if (ts.isTypeReferenceNode(node) && ts.isIdentifier(node.typeName)) {
    const aliasName = node.typeName.text;
    const alias = sourceFile.statements
      .filter(ts.isTypeAliasDeclaration)
      .find((candidate) => candidate.name.text === aliasName);

    if (alias) {
      return alias.type;
    }
  }

  return node;
};

/** Storybook docs descriptions hold the design rules; they are worth keeping. */
const evaluateStringExpression = (node: ts.Node): string | undefined => {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }

  if (
    ts.isBinaryExpression(node) &&
    node.operatorToken.kind === ts.SyntaxKind.PlusToken
  ) {
    const left = evaluateStringExpression(node.left);
    const right = evaluateStringExpression(node.right);

    if (left !== undefined && right !== undefined) {
      return left + right;
    }
  }

  return undefined;
};

const findStoriesUsage = (storiesPath: string) => {
  const sourceFile = readSourceFile(storiesPath);

  const visit = (
    node: ts.Node,
    insideDescription: boolean,
  ): string | undefined => {
    if (
      insideDescription &&
      ts.isPropertyAssignment(node) &&
      node.name.getText(sourceFile) === 'component'
    ) {
      const text = evaluateStringExpression(node.initializer);

      if (text) {
        return text.trim();
      }
    }

    const nowInside =
      insideDescription ||
      (ts.isPropertyAssignment(node) &&
        node.name.getText(sourceFile) === 'description');

    return ts.forEachChild(node, (child) => visit(child, nowInside));
  };

  return visit(sourceFile, false);
};

const isBarrel = (filePath: string) => /\/index\.tsx?$/.test(filePath);

/** Reads a barrel file into public export name → the file that declares it. */
const readBarrel = (barrelPath: string): Map<string, ExportedComponent> => {
  const sourceFile = readSourceFile(barrelPath);
  const entries = new Map<string, ExportedComponent>();

  for (const statement of sourceFile.statements) {
    if (!ts.isExportDeclaration(statement) || !statement.moduleSpecifier) {
      continue;
    }

    const specifier = statement.moduleSpecifier;

    if (!ts.isStringLiteral(specifier)) {
      continue;
    }

    const target = resolveModule(barrelPath, specifier.text);

    if (!target) {
      continue;
    }

    if (!statement.exportClause) {
      for (const [name, exported] of readBarrel(target)) {
        entries.set(name, exported);
      }
      continue;
    }

    if (!ts.isNamedExports(statement.exportClause)) {
      continue;
    }

    for (const element of statement.exportClause.elements) {
      const exported = element.name.text;
      const local = element.propertyName?.text ?? exported;

      if (
        statement.isTypeOnly ||
        element.isTypeOnly ||
        exported.endsWith('Props') ||
        !/^[A-Z]/.test(exported)
      ) {
        continue;
      }

      // `export { OptionAvatar as MenuItemAvatar } from '../Option'` points at
      // another barrel: follow it to the file that declares the component.
      const indirect = isBarrel(target)
        ? readBarrel(target).get(local === 'default' ? exported : local)
        : undefined;

      entries.set(
        exported,
        indirect ?? {
          file: target,
          localName:
            local === 'default'
              ? basename(target).replace(/\.tsx?$/, '')
              : local,
        },
      );
    }
  }

  return entries;
};

const listFilesDeep = (dir: string): string[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory()
      ? listFilesDeep(join(dir, entry.name))
      : [join(dir, entry.name)],
  );

const groupFilesCache = new Map<string, string[]>();

const getGroupFiles = (group: string) => {
  const cached = groupFilesCache.get(group);

  if (cached) {
    return cached;
  }

  const files = listFilesDeep(join(COMPONENTS_DIR, group));
  groupFilesCache.set(group, files);

  return files;
};

const describeComponent = (
  name: string,
  { file: filePath, localName }: ExportedComponent,
  group: string,
): ComponentInfo => {
  const sourceFile = readSourceFile(filePath);
  const declaration =
    findComponentDeclaration(sourceFile, localName) ??
    findComponentDeclaration(sourceFile, name);
  const propsType = declaration
    ? getPropsTypeNode(declaration, sourceFile)
    : undefined;
  const flattened = propsType
    ? flattenPropsType(propsType, sourceFile)
    : { props: [], extends: [] };
  const groupFiles = getGroupFiles(group);
  const specFiles = groupFiles.filter((file) => file.endsWith('.spec.tsx'));
  const storiesPath = groupFiles.find((file) =>
    file.endsWith(`/${localName}.stories.tsx`),
  );

  const coverageOf = (suffix: string): Coverage => {
    if (groupFiles.some((file) => file.endsWith(`/${localName}${suffix}`))) {
      return 'component';
    }

    return groupFiles.some((file) => file.endsWith(`/${group}${suffix}`))
      ? 'group'
      : 'none';
  };

  return {
    name,
    file: filePath.slice(REPO_ROOT.length + 1),
    group,
    description: declaration ? getDocComment(declaration) : undefined,
    usage: storiesPath ? findStoriesUsage(storiesPath) : undefined,
    deprecated: declaration ? getDeprecation(declaration) : undefined,
    acceptsProps: Boolean(propsType),
    props: flattened.props,
    extends: flattened.extends,
    primitive: /from '(react-aria|react-stately)/.test(sourceFile.text)
      ? 'react-aria'
      : 'none',
    coverage: {
      stories: coverageOf('.stories.tsx'),
      spec: coverageOf('.spec.tsx'),
      axe: specFiles.some((file) =>
        /jest-axe|toHaveNoViolations/.test(readFileSync(file, 'utf8')),
      ),
    },
  };
};

const collectComponents = () => {
  const rootBarrel = readSourceFile(join(COMPONENTS_DIR, 'index.ts'));
  const components: ComponentInfo[] = [];

  for (const statement of rootBarrel.statements) {
    if (
      !ts.isExportDeclaration(statement) ||
      !statement.moduleSpecifier ||
      !ts.isStringLiteral(statement.moduleSpecifier)
    ) {
      continue;
    }

    const group = statement.moduleSpecifier.text.replace('./', '');
    const barrelPath = resolveModule(
      join(COMPONENTS_DIR, 'index.ts'),
      statement.moduleSpecifier.text,
    );

    if (!barrelPath) {
      continue;
    }

    for (const [name, exported] of readBarrel(barrelPath)) {
      components.push(describeComponent(name, exported, group));
    }
  }

  return components.sort((a, b) => a.name.localeCompare(b.name));
};

const renderPropsTable = (props: PropInfo[]) => {
  const rows = props.map((prop) => {
    const values = prop.values ? prop.values.join(' | ') : prop.type;
    const notes = [
      prop.deprecated ? `**deprecated** ${prop.deprecated}` : undefined,
      prop.description,
    ]
      .filter(Boolean)
      .join(' — ');

    return `| \`${prop.name}\`${prop.optional ? '' : ' *(required)*'} | ${values.replace(
      /\|/g,
      '\\|',
    )} | ${notes} |`;
  });

  return ['| Prop | Type | Notes |', '| --- | --- | --- |', ...rows].join('\n');
};

const VARIANT_PROP_NAMES = ['variant', 'variation', 'kind', 'type'];

const summarize = (component: ComponentInfo) => {
  if (component.deprecated !== undefined) {
    return `deprecated — ${component.deprecated || 'no replacement given'}`;
  }

  const text = component.description ?? '';

  return text.length > 90 ? `${text.slice(0, 89)}…` : text;
};

const renderCatalog = (components: ComponentInfo[], version: string) => {
  const rows = components.map((component) => {
    const variants = component.props.find(
      (prop) => VARIANT_PROP_NAMES.includes(prop.name) && prop.values,
    );
    const size = component.props.find(
      (prop) => prop.name === 'size' && prop.values,
    );
    const cells = [
      `\`${component.name}\``,
      component.group,
      variants?.values?.join(', ') ?? '',
      size?.values?.join(', ') ?? '',
      summarize(component),
    ];

    return `| ${cells.join(' | ')} |`;
  });

  return [
    '<!-- Generated by tools/scripts/src/build-fuselage-registry.ts — do not edit. -->',
    '',
    `# Fuselage component catalog (v${version})`,
    '',
    `Every component exported by \`@rocket.chat/fuselage\` (${components.length} total).`,
    'Pick one here, then grep `components.md` for its full prop list.',
    '',
    '| Component | Group | Variants | Sizes | Notes |',
    '| --- | --- | --- | --- | --- |',
    ...rows,
    '',
  ].join('\n');
};

const renderMigration = (components: ComponentInfo[], version: string) => {
  const deprecatedComponents = components.filter(
    (component) => component.deprecated !== undefined,
  );
  const deprecatedProps = components.flatMap((component) =>
    component.props
      .filter((prop) => prop.deprecated !== undefined)
      .map((prop) => ({ component: component.name, prop })),
  );

  return [
    '<!-- Generated by tools/scripts/src/build-fuselage-registry.ts — do not edit. -->',
    '',
    `# Fuselage deprecations (v${version})`,
    '',
    'Everything marked `@deprecated` in the source. Never introduce these in new code;',
    'when touching a file that uses one, migrate it in the same change.',
    '',
    '## Deprecated components',
    '',
    ...(deprecatedComponents.length > 0
      ? [
          '| Component | Use instead |',
          '| --- | --- |',
          ...deprecatedComponents.map(
            (component) =>
              `| \`${component.name}\` | ${component.deprecated || '—'} |`,
          ),
        ]
      : ['None.']),
    '',
    '## Deprecated props',
    '',
    ...(deprecatedProps.length > 0
      ? [
          '| Component | Prop | Use instead |',
          '| --- | --- | --- |',
          ...deprecatedProps.map(
            ({ component, prop }) =>
              `| \`${component}\` | \`${prop.name}\` | ${prop.deprecated || '—'} |`,
          ),
        ]
      : ['None.']),
    '',
  ].join('\n');
};

const renderMarkdown = (components: ComponentInfo[], version: string) => {
  const groups = [...new Set(components.map((component) => component.group))];

  const sections = groups.map((group) => {
    const members = components.filter((component) => component.group === group);

    const bodies = members.map((component) => {
      const ownProps = component.props.filter(
        (prop) => prop.deprecated === undefined,
      );
      const deprecated = component.props.filter(
        (prop) => prop.deprecated !== undefined,
      );
      const lines = [
        `#### \`${component.name}\``,
        '',
        component.deprecated !== undefined
          ? `**Deprecated.** ${component.deprecated || 'No replacement given in source.'}`
          : (component.description ?? '_No description in source._'),
        '',
        `- Source: \`${component.file}\``,
        `- Primitive: ${component.primitive}`,
        `- Stories: ${component.coverage.stories} · unit test: ${component.coverage.spec} · axe in group: ${
          component.coverage.axe ? 'yes' : 'no'
        }`,
      ];

      if (component.extends.length > 0) {
        lines.push(
          `- Also accepts: ${component.extends
            .map((name) => `\`${name}\``)
            .join(', ')}`,
        );
      }

      if (ownProps.length > 0) {
        lines.push('', renderPropsTable(ownProps));
      }

      if (deprecated.length > 0) {
        lines.push(
          '',
          `Deprecated props: ${deprecated
            .map((prop) => `\`${prop.name}\``)
            .join(', ')} — see \`migration.md\`.`,
        );
      }

      if (component.usage) {
        lines.push('', '**Usage rules**', '', component.usage);
      }

      return lines.join('\n');
    });

    return [`### ${group}`, ...bodies].join('\n\n');
  });

  return [
    '<!-- Generated by tools/scripts/src/build-fuselage-registry.ts — do not edit. -->',
    '',
    `# Fuselage component API reference (v${version})`,
    '',
    `${components.length} components exported from \`@rocket.chat/fuselage\`, grouped by source directory.`,
    'Props inherited from `BoxProps` and DOM attributes are listed as "Also accepts" instead of being expanded.',
    '',
    ...sections,
    '',
  ].join('\n');
};

const { version } = JSON.parse(
  readFileSync(join(PKG_DIR, 'package.json'), 'utf8'),
) as { version: string };

const components = collectComponents();

writeFileSync(
  join(PKG_DIR, 'registry.json'),
  `${JSON.stringify(
    {
      package: '@rocket.chat/fuselage',
      version,
      import: "import { Button } from '@rocket.chat/fuselage';",
      components,
    },
    null,
    2,
  )}\n`,
);

writeFileSync(
  join(SKILL_DIR, 'references/components.md'),
  renderMarkdown(components, version),
);

writeFileSync(
  join(SKILL_DIR, 'references/catalog.md'),
  renderCatalog(components, version),
);

writeFileSync(
  join(SKILL_DIR, 'references/migration.md'),
  renderMigration(components, version),
);

const withAria = components.filter(
  (component) => component.primitive === 'react-aria',
).length;
const withAxe = components.filter((component) => component.coverage.axe).length;

process.stdout.write(
  `registry: ${components.length} components, ${withAria} on react-aria, ${withAxe} with axe coverage\n`,
);
