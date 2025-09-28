import isLokiRunning from '@loki/is-loki-running';
import { Button } from '@rocket.chat/fuselage';
import type { Meta, StoryFn } from '@storybook/react-webpack5';
import { useEffect, useState, useCallback, useMemo } from 'react';

import { useToastBarDispatch } from './ToastBarContext';

export default {
  title: 'view/ToastBar',
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
} satisfies Meta;

const DEFAULT_MESSAGE = 'Lorem Ipsum';

export const Default: StoryFn = () => {
  const [counter, setCounter] = useState(0);
  const dispatchToastMessage = useToastBarDispatch();

  const messageArray = useMemo(
    () => [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihi',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihi',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihi',
      DEFAULT_MESSAGE,
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    ],
    [],
  );

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
  const handleToastLoki = useCallback(() => {
    dispatchToastMessage({
      type: 'success',
      message: messageArray[0],
      time: 10,
    });

    dispatchToastMessage({
      type: 'error',
      message: messageArray[0],
      position: 'bottom-start',
    });
  }, [messageArray, dispatchToastMessage]);

  useEffect(() => {
    if (isLokiRunning()) {
      handleToastLoki();
    }
  }, [handleToastLoki]);
  return (
    <Button primary onClick={handleToast}>
      Dispatch ToastBar
    </Button>
  );
};

const Template: StoryFn<typeof useToastBarDispatch> = (args) => {
  const dispatchToastMessage = useToastBarDispatch();

  useEffect(() => {
    dispatchToastMessage({
      type: 'success',
      message: DEFAULT_MESSAGE,
      ...args,
    });
  }, [args, dispatchToastMessage]);

  return (
    <Button
      primary
      onClick={() =>
        dispatchToastMessage({
          type: 'success',
          message: DEFAULT_MESSAGE,
          ...args,
        })
      }
    >
      Dispatch ToastBar
    </Button>
  );
};

export const TopStart = Template.bind({});
TopStart.args = {
  position: 'top-start',
};

export const TopEnd = Template.bind({});
TopEnd.args = {
  position: 'top-end',
};

export const BottomStart = Template.bind({});
BottomStart.args = {
  position: 'bottom-start',
};

export const BottomEnd = Template.bind({});
BottomEnd.args = {
  position: 'bottom-end',
};

export const Persistent = Template.bind({});
Persistent.args = {
  isPersistent: true,
};
