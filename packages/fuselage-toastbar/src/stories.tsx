import { Button } from '@rocket.chat/fuselage';
import type { Meta, Story } from '@storybook/react';

import { useToastBarDispatch } from './ToastBarContext';

export default {
  title: 'view/ToastBar',
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta;

export const ToastBarWithData: Story = () => {
  const dispatchToastMessage = useToastBarDispatch();
  const handleToast = () => {
    dispatchToastMessage({
      type: 'success',
      message:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihi',
    });
  };

  return (
    <>
      <Button onClick={handleToast}>Dispatch ToastBar</Button>
    </>
  );
};
