import type { InputBoxProps } from '@rocket.chat/fuselage';
import { Box, InputBox } from '@rocket.chat/fuselage';
import type { ReactNode, Ref } from 'react';

type WorkspaceUrlInputProps = Omit<InputBoxProps, 'ref' | 'type'> & {
  ref?: Ref<HTMLInputElement>;
  addon?: ReactNode;
  error?: string | undefined;
  domain: string;
};

const WorkspaceUrlInput = ({ domain, ...props }: WorkspaceUrlInputProps) => (
  <InputBox
    type='text'
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

export default WorkspaceUrlInput;
