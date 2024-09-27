import type { ComponentProps, ReactElement } from 'react';

import Box from '../Box';
import { Button } from '../Button';
import { Skeleton } from '../Skeleton';

type CodeSnippetProps = ComponentProps<typeof Box> & {
  children: string;
  buttonText?: string;
  buttonDisabled?: boolean;
  onClick?: () => void;
};

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
