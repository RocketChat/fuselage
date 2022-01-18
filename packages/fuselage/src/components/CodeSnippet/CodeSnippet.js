import React from 'react';

import { Box } from '../Box';
import { Button } from '../Button';

const CodeSnippet = ({ code, handleClick, buttonText = 'Copy', ...props }) => (
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
