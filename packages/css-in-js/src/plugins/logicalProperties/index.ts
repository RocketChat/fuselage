import { Context, Plugin } from '@emotion/stylis';

import { cssSupports } from '../../cssSupports';

const createReplacementPlugin = (original: string, replace: (value: string) => string): Plugin =>
  (context: Context, content: string) => {
    if (context !== 1) {
      return;
    }

    let i: number;
    const property = content.slice(0, i = content.indexOf(':'));

    if (property !== original) {
      return;
    }

    return replace(content.slice(i + 1));
  };

const createDoubleReplacementPlugin = (original: string, start: string, end: string): Plugin =>
  (context: Context, content: string) => {
    if (context !== 1) {
      return;
    }

    let i: number;
    const property = content.slice(0, i = content.indexOf(':'));

    if (property !== original) {
      return;
    }

    const value = content.slice(i + 1);

    return `${ start }:${ value };${ end }:${ value }`;
  };

const createInlineReplacementFallbackPlugin = (original: string, start: string, end: string): Plugin => {
  let buffer = '';

  return (context: Context, content: string, selector: string[]) => {
    if (context === 1) {
      let i: number;
      const property = content.slice(0, i = content.indexOf(':'));

      if (property !== original) {
        return;
      }

      if (selector.length > 1) {
        throw Error(JSON.stringify(selector));
      }

      const value = content.slice(i + 1);

      buffer += `*:not([dir=rtl]) ${ selector[0] }{${ start }:${ value };}`
        + `[dir=rtl] ${ selector[0] }{${ end }:${ value };}`;

      return '';
    }

    if (context === -2) {
      if (!buffer) {
        return;
      }

      try {
        return `${ content }${ buffer }`;
      } finally {
        buffer = '';
      }
    }
  };
};

const createDoubleInlineReplacementFallbackPlugin = (original: string, start: string, end: string): Plugin => {
  let buffer = '';

  return (context: Context, content: string, selector: string[]) => {
    if (context === 1) {
      let i: number;
      const property = content.slice(0, i = content.indexOf(':'));

      if (property !== original) {
        return;
      }

      if (selector.length > 1) {
        throw Error(JSON.stringify(selector));
      }

      const value = content.slice(i + 1);

      buffer += `*:not([dir=rtl]) ${ selector[0] }{${ start }:${ value };${ end }:${ value };}`
        + `[dir=rtl] ${ selector[0] }{${ end }:${ value };${ start }:${ value };}`;

      return '';
    }

    if (context === -2) {
      if (!buffer) {
        return;
      }

      try {
        return `${ content }${ buffer }`;
      } finally {
        buffer = '';
      }
    }
  };
};

export type LogicalPropertiesOptions = {
  marginInline: boolean;
  marginInlineStartEnd: boolean;
  marginBlock: boolean;
  marginBlockStartEnd: boolean;
  paddingInline: boolean;
  paddingInlineStartEnd: boolean;
  paddingBlock: boolean;
  paddingBlockStartEnd: boolean;
};

type LogicalProperty = {
  names: {
    inline: {
      both: string;
      start: string;
      end: string;
      fallback: {
        start: string;
        end: string;
      };
    };
    block: {
      both: string;
      start: string;
      end: string;
      fallback: {
        start: string;
        end: string;
      };
    };
  };
  options: {
    inline: keyof LogicalPropertiesOptions;
    inlineStartEnd: keyof LogicalPropertiesOptions;
    block: keyof LogicalPropertiesOptions;
    blockStartEnd: keyof LogicalPropertiesOptions;
  };
};

const marginProperty: LogicalProperty = {
  names: {
    inline: {
      both: 'margin-inline',
      start: 'margin-inline-start',
      end: 'margin-inline-end',
      fallback: {
        start: 'margin-left',
        end: 'margin-right',
      },
    },
    block: {
      both: 'margin-block',
      start: 'margin-block-start',
      end: 'margin-block-end',
      fallback: {
        start: 'margin-top',
        end: 'margin-bottom',
      },
    },
  },
  options: {
    inline: 'marginInline',
    inlineStartEnd: 'marginInlineStartEnd',
    block: 'marginBlock',
    blockStartEnd: 'marginBlockStartEnd',
  },
};

const paddingProperty: LogicalProperty = {
  names: {
    inline: {
      both: 'padding-inline',
      start: 'padding-inline-start',
      end: 'padding-inline-end',
      fallback: {
        start: 'padding-left',
        end: 'padding-right',
      },
    },
    block: {
      both: 'padding-block',
      start: 'padding-block-start',
      end: 'padding-block-end',
      fallback: {
        start: 'padding-top',
        end: 'padding-bottom',
      },
    },
  },
  options: {
    inline: 'paddingInline',
    inlineStartEnd: 'paddingInlineStartEnd',
    block: 'paddingBlock',
    blockStartEnd: 'paddingBlockStartEnd',
  },
};

const getPropertyDefaultOptions = (property: LogicalProperty): Partial<LogicalPropertiesOptions> => ({
  [property.options.inline]: cssSupports(`${ property.names.inline.both }:inherit`),
  [property.options.inlineStartEnd]: cssSupports(`${ property.names.inline.start }:inherit`)
    && cssSupports(`${ property.names.inline.end }:inherit`),
  [property.options.block]: cssSupports(`${ property.names.block.both }:inherit`),
  [property.options.blockStartEnd]: cssSupports(`${ property.names.block.start }:inherit`)
    && cssSupports(`${ property.names.block.end }:inherit`),
});

const getPropertyPlugins = (property: LogicalProperty, options: LogicalPropertiesOptions): Plugin[] => {
  const hasInline = options[property.options.inline];
  const hasInlineStartEnd = options[property.options.inlineStartEnd];
  const hasBlock = options[property.options.block];
  const hasBlockStartEnd = options[property.options.blockStartEnd];

  const plugins: Plugin[] = [];

  if (!hasInline) {
    if (hasInlineStartEnd) {
      plugins.push(createDoubleReplacementPlugin(property.names.inline.both, property.names.inline.start, property.names.inline.end));
    } else {
      plugins.push(
        createDoubleInlineReplacementFallbackPlugin(property.names.inline.both, property.names.inline.fallback.start, property.names.inline.fallback.end),
        createInlineReplacementFallbackPlugin(property.names.inline.start, property.names.inline.fallback.start, property.names.inline.fallback.end),
        createInlineReplacementFallbackPlugin(property.names.inline.end, property.names.inline.fallback.end, property.names.inline.fallback.start),
      );
    }
  }

  if (!hasBlock) {
    if (hasBlockStartEnd) {
      plugins.push(createDoubleReplacementPlugin(property.names.block.both, property.names.block.start, property.names.block.end));
    } else {
      plugins.push(
        createDoubleReplacementPlugin(property.names.block.both, property.names.block.fallback.start, property.names.block.fallback.end),
        createReplacementPlugin(property.names.block.start, (value) => `${ property.names.block.fallback.start }:${ value }`),
        createReplacementPlugin(property.names.block.end, (value) => `${ property.names.block.fallback.end }:${ value }`),
      );
    }
  }

  return plugins;
};

export const createLogicalPropertiesPlugins = (options: Partial<LogicalPropertiesOptions>): Plugin[] => {
  const resolvedOptions: LogicalPropertiesOptions = Object.assign({
    ...getPropertyDefaultOptions(marginProperty),
    ...getPropertyDefaultOptions(paddingProperty),
  } as LogicalPropertiesOptions, options);

  const plugins = [
    ...getPropertyPlugins(marginProperty, resolvedOptions),
    ...getPropertyPlugins(paddingProperty, resolvedOptions),
  ];

  return plugins;
};
