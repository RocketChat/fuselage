import { Button } from '@rocket.chat/fuselage';
import type { Meta, StoryFn } from '@storybook/react';
import { useEffect, useState } from 'react';

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

  const messageArray = [
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihi',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihi',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihi',
    DEFAULT_MESSAGE,
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
    <Button primary onClick={handleToast}>
      Dispatch ToastBar
    </Button>
  );
};

export const TopStart: StoryFn = () => {
  const dispatchToastMessage = useToastBarDispatch();

  const handleDispatch = () =>
    dispatchToastMessage({
      type: 'success',
      message: DEFAULT_MESSAGE,
      position: 'top-start',
    });

  useEffect(() => {
    handleDispatch();
  }, []);

  return (
    <Button primary onClick={handleDispatch}>
      Dispatch ToastBar
    </Button>
  );
};

export const TopEnd: StoryFn = () => {
  const dispatchToastMessage = useToastBarDispatch();

  const handleDispatch = () =>
    dispatchToastMessage({
      type: 'success',
      message: DEFAULT_MESSAGE,
    });

  useEffect(() => {
    handleDispatch();
  }, []);

  return (
    <Button primary onClick={handleDispatch}>
      Dispatch ToastBar
    </Button>
  );
};

export const BottomStart: StoryFn = () => {
  const dispatchToastMessage = useToastBarDispatch();

  const handleDispatch = () =>
    dispatchToastMessage({
      type: 'success',
      message: DEFAULT_MESSAGE,
      position: 'bottom-start',
    });

  useEffect(() => {
    handleDispatch();
  }, []);

  return (
    <Button primary onClick={handleDispatch}>
      Dispatch ToastBar
    </Button>
  );
};

export const BottomEnd: StoryFn = () => {
  const dispatchToastMessage = useToastBarDispatch();

  const handleDispatch = () =>
    dispatchToastMessage({
      type: 'success',
      message: DEFAULT_MESSAGE,
      position: 'bottom-end',
    });

  useEffect(() => {
    handleDispatch();
  }, []);

  return (
    <Button primary onClick={handleDispatch}>
      Dispatch ToastBar
    </Button>
  );
};
