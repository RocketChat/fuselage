import React, { useState, useEffect } from 'react';

export const ACTIONS = {
  ESC: 27,
  KEY_UP: 38,
  KEY_DOWN: 40,
  HOME: 36,
  END: 35,
  TAB: 9,
  ENTER: 13,
};

export const VISIBILITY = {
  HIDEN: 0,
  VISIBLE: 1,
  HIDING: 2,
};

export const AnimatedWrapper = ({ visible, children: Item }) => {
  const [visibility, setVisibility] = useState(VISIBILITY.HIDEN);
  useEffect(() => {
    if (visible === visibility) {
      return;
    }
    if (visibility === VISIBILITY.HIDING) {
      const handle = setTimeout(() => setVisibility(VISIBILITY.HIDEN), 100);
      return () => clearTimeout(handle);
    }
    if (visible === VISIBILITY.VISIBLE) {
      return setVisibility(VISIBILITY.VISIBLE);
    }
    if (visible === VISIBILITY.HIDEN) {
      return setVisibility(VISIBILITY.HIDING);
    }
  }, [visibility, visible]);

  return React.cloneElement(Item, {
    className: ['rcx-animated', visibility === VISIBILITY.HIDING && 'rcx-animated--hiding', visibility === VISIBILITY.VISIBLE && 'rcx-animated--visible', Item.props.className].filter((e) => e).join(' '),
  });
};

export const useVisible = (initial = VISIBILITY.HIDEN) => {
  const [visible, setVisible] = useState(initial);
  const hide = () => setVisible(VISIBILITY.HIDEN);
  const show = () => setVisible(VISIBILITY.VISIBLE);
  return [visible, hide, show];
};
