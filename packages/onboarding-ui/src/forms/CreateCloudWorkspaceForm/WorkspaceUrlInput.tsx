import { Box, InputBox } from '@rocket.chat/fuselage';
import type { ComponentProps, ReactNode, ForwardedRef } from 'react';
import { forwardRef } from 'react';

type WorkspaceUrlInputProps = Omit<ComponentProps<typeof InputBox>, 'type'> & {
  addon?: ReactNode;
  error?: string | undefined;
  domain: string;
};

const WorkspaceUrlInput = forwardRef(function TextInput(
  props: WorkspaceUrlInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const { domain } = props;

  return (
    <InputBox
      type='text'
      ref={ref}
      {...props}
      addon={
        <Box
          borderInlineStart='2px solid'
          mb='neg-x8'
          pb={8}
          borderColor='neutral-500'
          color='info'
          pis={12}
        >
          {domain}
        </Box>
      }
    />
  );
});

export default WorkspaceUrlInput;
