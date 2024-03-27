import type { AllHTMLAttributes, ComponentProps, ReactElement } from 'react';
import React from 'react';

import Box from '../Box';
import { Button } from '../Button';
import { Skeleton } from '../Skeleton';

type CodeSnippetProps = ComponentProps<typeof Box> & {
  children: string;
  buttonText?: string;
  buttonDisabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
} & AllHTMLAttributes<HTMLPreElement>;

const CodeSnippet = ({
  children,
  buttonText = 'Copy',
  buttonDisabled,
  onClick,
  isLoading,
  ...props
}: CodeSnippetProps): ReactElement<CodeSnippetProps> => {
  if (isLoading) {
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
      {onClick && (
        <div>
          <Button small primary disabled={buttonDisabled} onClick={onClick}>
            {buttonText}
          </Button>
        </div>
      )}
    </Box>
  );
};

export default CodeSnippet;
