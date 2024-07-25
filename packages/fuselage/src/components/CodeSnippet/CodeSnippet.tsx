import type { ReactElement } from 'react';
import React from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';
import { Button } from '../Button';
import { Skeleton } from '../Skeleton';

type CodeSnippetProps = BoxProps & {
  children: string;
  buttonText?: string;
  buttonDisabled?: boolean;
  onClick?: () => void;
};

const CodeSnippet = ({
  children,
  onClick,
  buttonText = 'Copy',
  buttonDisabled = false,
  ...props
}: CodeSnippetProps): ReactElement<CodeSnippetProps> => {
  if (!children) {
    return (
      <Box is='pre' rcx-code-snippet {...props}>
        <Skeleton w='100%' aria-hidden aria-busy />
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
          <Button small primary onClick={onClick} disabled={buttonDisabled}>
            {buttonText}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CodeSnippet;
