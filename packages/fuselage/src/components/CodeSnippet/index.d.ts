import { ComponentProps, ReactElement } from 'react';

import { Box } from '../Box';

type CodeSnippetProps = ComponentProps<typeof Box> & {
  code?: string;
  buttonText?: string;
  handleClick?: () => void;
};
export const CodeSnippet: (props: CodeSnippetProps) => ReactElement;
