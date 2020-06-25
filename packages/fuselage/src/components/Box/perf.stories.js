import { storiesOf } from '@storybook/react';
import React, { StrictMode, useEffect, useState, useRef } from 'react';

import { Box, Margins } from '../..';

const MountTest = ({ children }) => {
  const [length, setLength] = useState(10);
  const [log, setLog] = useState([]);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const log = (line) => setLog((lines) => [
      line,
      ...lines,
    ].slice(0, 15));

    const elapsedTime = Date.now() - startTimeRef.current;

    log(`Length: ${ length }; Elapsed time: ${ elapsedTime } ms`);

    if (elapsedTime > 400) {
      log('Stopped.');
      return;
    }

    startTimeRef.current = Date.now();
    setLength((length) => length + 10);
  }, [length]);

  return <>
    {Array.from({ length }, (_, i) => children(i))}
    <pre>
      {log.map((line, i) => <p key={i}>{line}</p>)}
    </pre>
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
