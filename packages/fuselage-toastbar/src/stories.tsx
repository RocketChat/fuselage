import { Button, Box } from '@rocket.chat/fuselage';
import type { Meta, Story } from '@storybook/react';
import { useState } from 'react';

import { useToastBarDispatch } from './ToastBarContext';

export default {
  title: 'view/ToastBar',
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta;

export const ToastBarWithData: Story = () => {
  const [counter, setCounter] = useState(0);
  const dispatchToastMessage = useToastBarDispatch();

  const messageArray = [
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihi',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihi',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihi',
    'Lorem Ipsum',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  ];

  const handleToast = () => {
    dispatchToastMessage({
      type: 'success',
      message: messageArray[counter],
    });

    dispatchToastMessage({
      type: 'error',
      message: messageArray[counter],
      time: 10,
      position: 'bottom-start',
    });

    if (counter === messageArray.length - 1) {
      return setCounter(0);
    }

    return setCounter((prevState) => prevState + 1);
  };

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      height='100vh'
    >
      <Button primary onClick={handleToast}>
        Dispatch ToastBar
      </Button>
    </Box>
  );
};
