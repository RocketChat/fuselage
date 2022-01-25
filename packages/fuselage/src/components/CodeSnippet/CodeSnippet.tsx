import React, { ComponentProps, ReactElement } from 'react';

import { Box } from '../Box';
import { Button } from '../Button';

type CodeSnippetProps = ComponentProps<typeof Box> & {
  children: string;
  buttonText?: string;
  onClick?: () => void;
};

const CodeSnippet = ({
  children,
  onClick,
  buttonText = 'Copy',
  ...props
}: CodeSnippetProps): ReactElement<CodeSnippetProps> => (
  <Box is='pre' rcx-code-snippet {...props}>
    <Box rcx-code-snippet__codebox>
      <code>{children}</code>
    </Box>
    {onClick && (
      <Box>
        <Button small primary onClick={onClick}>
          {buttonText}
        </Button>
      </Box>
    )}
  </Box>
);

export default CodeSnippet;
