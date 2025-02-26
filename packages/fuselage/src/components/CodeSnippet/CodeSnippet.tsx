import type { AllHTMLAttributes, ReactElement } from 'react';

import Box from '../Box';
import { Button } from '../Button';
import { Skeleton } from '../Skeleton';

type CodeSnippetProps = {
  children: string;
  buttonText?: string;
  buttonDisabled?: boolean;
  onClick?: () => void;
} & Omit<AllHTMLAttributes<HTMLElement>, 'is'>;

/**
 * The `CodeSnippet` is used to show code or commands and make easier to copy them.
 *
 * The default button text is `Copy` but you can use the `buttonText` prop to handle translations in your project.
 *
 * Please check the `useClipBoard` hook in `fuselage-hooks` package, to handle the copy behaviour.
 */
const CodeSnippet = ({
  children,
  onClick,
  buttonText = 'Copy',
  buttonDisabled = false,
  ...props
}: CodeSnippetProps): ReactElement<CodeSnippetProps> => {
  if (!children) {
    return (
      <Box is='pre' rcx-code-snippet>
        <Skeleton w='100%' aria-hidden aria-busy />
      </Box>
    );
  }

  return (
    <Box is='pre' rcx-code-snippet>
      <Box role='code' rcx-code-snippet__codebox {...props}>
        {children}
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
