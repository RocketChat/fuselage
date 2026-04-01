import type { ReactElement } from 'react';

import { styled, Text } from '@tamagui/core';

import { RcxView } from '../../primitives';
import { Button } from '../Button';
import { Skeleton } from '../Skeleton';

// Outer — RcxView for layout (pre element in original)
const CodeSnippetBase = styled(RcxView, {
  name: 'CodeSnippet',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%' as any,
  minHeight: '$x60',
  padding: '$x16',

  borderRadius: '$x4',

  backgroundColor: '$surfaceNeutral',
});

// Codebox — Text for font props (monospace)
const CodeSnippetCodebox = styled(Text, {
  name: 'CodeSnippetCodebox',

  marginRight: '$x8',

  // Unsupported in styled: whiteSpace, wordBreak applied via style
  fontFamily: '$mono',
  color: '$fontDefault',
});

export type CodeSnippetProps = {
  children: string;
  buttonText?: string;
  buttonDisabled?: boolean;
  onClick?: () => void;
  [key: string]: any;
};

/**
 * The `CodeSnippet` is used to show code or commands and make easier to copy them.
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
      <CodeSnippetBase {...(props as any)}>
        <Skeleton w='100%' aria-hidden aria-busy />
      </CodeSnippetBase>
    );
  }

  return (
    <CodeSnippetBase {...(props as any)}>
      <CodeSnippetCodebox
        role='code'
        style={{ whiteSpace: 'pre-line', wordBreak: 'break-all' }}
      >
        {children}
      </CodeSnippetCodebox>
      {onClick && children && (
        <Button small primary onClick={onClick} disabled={buttonDisabled}>
          {buttonText}
        </Button>
      )}
    </CodeSnippetBase>
  );
};

export default CodeSnippet;
