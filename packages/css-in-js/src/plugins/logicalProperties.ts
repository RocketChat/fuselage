import { Context } from '@emotion/stylis';

export type LogicalPropertiesOptions = {
  marginInline: boolean;
  marginInlineStart: boolean;
  marginInlineEnd: boolean;
  marginBlock: boolean;
  marginBlockStart: boolean;
  marginBlockEnd: boolean;
};

export const createLogicalPropertiesPlugin = (options: Partial<LogicalPropertiesOptions>) =>
  (context: Context, content: string): string | void => {
    if (context !== 1) {
      return;
    }

    const [property, value] = content.split(':');

    if (property === 'margin-inline') {
      if (options.marginInline) {
        return;
      }

      if (options.marginInlineStart && options.marginInlineEnd) {
        return `margin-inline-start:${ value };margin-inline-end:${ value }`;
      }

      return `margin-left:${ value };margin-right:${ value }`;
    }
  };
