import type { InputBoxProps } from '@rocket.chat/fuselage';
import { Box, InputBox } from '@rocket.chat/fuselage';

type WorkspaceUrlInputProps = Omit<InputBoxProps, 'type'> & {
  domain: string;
};

const WorkspaceUrlInput = ({ domain, ...props }: WorkspaceUrlInputProps) => (
  <InputBox
    type='text'
    {...props}
    endAddon={
      <Box
        borderInlineStart='2px solid'
        marginBlock='neg-x8'
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
