import React, { ComponentProps, ReactElement } from 'react';

import { Box } from '../Box';
import { Button } from '../Button';

type CodeSnippetProps = ComponentProps<typeof Box> & {
  code?: string;
  buttonText?: string;
  handleClick?: () => void;
};

const CodeSnippet = ({
  code,
  handleClick,
  buttonText = 'Copy',
  ...props
}: CodeSnippetProps): ReactElement<CodeSnippetProps> => (
  <Box is='pre' rcx-code-snippet {...props}>
    <Box rcx-code-snippet__codebox>
      <code>{code}</code>
    </Box>
    <Box>
      <Button small primary onClick={handleClick}>
        {buttonText}
      </Button>
    </Box>
  </Box>
);

export default CodeSnippet;
