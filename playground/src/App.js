import { Box, Callout, Scrollable } from '@rocket.chat/fuselage';
import '@rocket.chat/icons/dist/rocketchat.css';
import editorTheme from 'prism-react-renderer/themes/github';
import React from 'react';
import {
  LiveProvider,
  LiveEditor,
  withLive,
} from 'react-live';
import logo from './logo.svg';

const scope = {
  ...React,
  ...require('@rocket.chat/css-in-js'),
  ...require('@rocket.chat/fuselage'),
  ...require('@rocket.chat/fuselage-hooks'),
};

const code = `<ButtonGroup align='center'>
  <Button primary>Button</Button>
</ButtonGroup>`;

const Preview = withLive(function Preview({ live: { element } }) {
  return <Scrollable>
    <Box flexGrow={1}>
      <Box>
        {React.createElement(element)}
      </Box>
    </Box>
  </Scrollable>
});

const ErrorDisplay = withLive(function ErrorDisplay({ live: { error } }) {
  if (!error) {
    return null;
  }

  return <Callout type='danger' marginBlockStart='x16'>
    <Box is='pre'>
      {error}
    </Box>
  </Callout>
});

function App() {
  return (
    <Box
      height='sh'
      padding='x32'
      display='flex'
      flexDirection='column'
      alignItems='center'
      color='default'
      backgroundColor='neutral-100'
    >
      <Box is='img' margin='x16' maxWidth='x640' src={logo} alt='Rocket.Chat' />
      <Box fontScale='h1' marginBlock='x16' textAlign='center'>Fuselage Playground</Box>
      <LiveProvider scope={scope} code={code} theme={editorTheme}>
        <Box width='full' height='x1' flexGrow={1} display='flex' alignItems='stretch' justifyContent='stretch'>
          <Box flexGrow={0} flexShrink={0} flexBasis='50%' maxWidth='50%' display='flex' flexDirection='column'>
            <Preview />
            <ErrorDisplay />
          </Box>
          <Scrollable>
            <Box flexGrow={0} flexShrink={0} flexBasis='50%'>
              <Box is={LiveEditor} minHeight='full' />
            </Box>
          </Scrollable>
        </Box>
      </LiveProvider>
    </Box>
  );
}

export default App;
