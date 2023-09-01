import { readFile, writeFile } from 'node:fs/promises';

import { outdent } from 'outdent';
import { Project } from 'ts-morph';

const project = new Project({
  tsConfigFilePath: './tsconfig.json',
});

const checker = project.getTypeChecker();

const index = project.getSourceFileOrThrow('src/index.ts');

const blockElementType = checker.getDeclaredTypeOfSymbol(
  index.getExportSymbols().find((x) => x.getName() === 'BlockElement')
);

if (!blockElementType.isUnion())
  throw new Error('BlockElement is not a union type');

const blockElementTypes = blockElementType.getUnionTypes();

const blockElements = blockElementTypes.map((type) => {
  const symbol = type.getAliasSymbol() ?? type.getSymbolOrThrow();
  const name = symbol.getName();
  const properties = type.getProperties();

  return {
    name,
    properties: properties.map((property) => {
      const type = property.getTypeAtLocation(index);

      return {
        field: property.getName(),
        type: checker.compilerObject.typeToString(type.compilerType),
        required: !property.isOptional(),
        deprecations: property
          .getDeclarations()
          .flatMap((decl) => decl.getJsDocs())
          .flatMap((doc) => doc.getTags())
          .filter((tag) => tag.getTagName() === 'deprecated')
          .map((deprecatedTag) => deprecatedTag.getCommentText()),
        description:
          property
            .getDeclarations()
            .flatMap((decl) => decl.getJsDocs())
            .map((doc) => doc.getDescription())
            .join('\n') || undefined,
      };
    }),
  };
});

const readmeContent = await readFile('./README.md', { encoding: 'utf-8' });

const replaceSection = (name, sectionContent) => (content) => {
  const sectionBegin = `<!--${name}-->`;
  const sectionEnd = `<!--/${name}-->`;

  const beginIndex = content.indexOf(sectionBegin);

  if (beginIndex < 0) {
    return content;
  }

  const endIndex = content.indexOf(sectionEnd, beginIndex);

  if (endIndex < 0) {
    return content;
  }

  const before = content.slice(0, beginIndex + sectionBegin.length);
  const after = content.slice(endIndex);

  return `${before}\n\n${sectionContent}\n\n${after}`;
};

const replaceBlockElements = replaceSection(
  'block-elements',
  blockElements
    .map((blockElement) => {
      0;

      return outdent`
        #### ${blockElement.name}

        Field | Type | Required | Description
        --- | --- | --- | ---
        ${blockElement.properties
          .map((property) => {
            const deprecation = property.deprecations
              .map((deprecation) => `**Deprecated:** ${deprecation}`)
              .join('\n');

            const description = property.description
              ? `${property.description}\n\n${deprecation}`
              : deprecation;

            return `\`${property.field}\` | \`${property.type.replace(
              /\|/g,
              '\\|'
            )}\` | ${property.required ? 'Yes' : 'No'} | ${description}`;
          })
          .join('\n')}
      `;
    })
    .join('\n\n')
);

await writeFile('./README.md', replaceBlockElements(readmeContent), {
  encoding: 'utf-8',
});
