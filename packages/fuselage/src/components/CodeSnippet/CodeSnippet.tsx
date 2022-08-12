import type { ComponentProps, ReactElement } from 'react';
import React from 'react';

import Box from '../Box';
import { Button } from '../Button';
import { Skeleton } from '../Skeleton';

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
}: CodeSnippetProps): ReactElement<CodeSnippetProps> => {
  if (!children) {
    return (
      <Box is='pre' rcx-code-snippet {...props}>
        <Skeleton w='100%' data-testid='code-snippet-skeleton' />
      </Box>
    );
  }

  return (
    <Box is='pre' rcx-code-snippet {...props}>
      <Box rcx-code-snippet__codebox>
        <code>{children}</code>
      </Box>
      {onClick && children && (
        <Box>
          <Button
            small
            primary
            onClick={onClick}
            data-testid='code-snippet-button-box'
          >
            {buttonText}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CodeSnippet;
