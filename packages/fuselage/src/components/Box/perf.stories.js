import { storiesOf } from '@storybook/react';
import React, { StrictMode, useEffect, useState, useRef } from 'react';

import { Box, Margins } from '../..';

const MountTest = ({ children }) => {
  const [length, setLength] = useState(10);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const elapsedTime = Date.now() - startTimeRef.current;

    console.log(`${ length } components rendered in ${ elapsedTime } ms (${ (elapsedTime / length).toFixed(6) } ms/component)`);

    if (elapsedTime > 400) {
      console.log('Stopped.');
      return;
    }

    requestAnimationFrame(() => {
      startTimeRef.current = Date.now();
      setLength((length) => length + 10);
    });
  }, [length]);

  return <>
    {Array.from({ length }, (_, i) => children(i))}
  </>;
};

storiesOf('Box/Performance', module)
  .addParameters({
    jest: ['Box/spec'],
    docs: { disable: true },
  })
  .addDecorator((fn) => <StrictMode>{fn()}</StrictMode>)
  .lokiSkip('Without Props', () => <MountTest>
    {(i) => <Box key={i} />}
  </MountTest>)
  .lokiSkip('With is Prop', () => <MountTest>
    {(i) => <Box key={i} is='button' />}
  </MountTest>)
  .lokiSkip('With Non-Memoized Event Listener', () => <MountTest>
    {(i) => <Box key={i} onClick={() => {}} />}
  </MountTest>)
  .lokiSkip('With Margins', () => <MountTest>
    {(i) => <Margins key={i}>
      <Box/>
    </Margins>}
  </MountTest>)
  .lokiSkip('With One Margins', () => <Margins>
    <MountTest>
      {(i) => <Box key={i}/>}
    </MountTest>
  </Margins>)
  .lokiSkip('With margin Prop', () => <MountTest>
    {(i) => <Box key={i} margin='none' />}
  </MountTest>);
