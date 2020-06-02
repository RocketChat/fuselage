import React from 'react';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';
import dracula from 'prism-react-renderer/themes/dracula';
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';
import github from 'prism-react-renderer/themes/github';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
import palenight from 'prism-react-renderer/themes/palenight';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';
import synthwave84 from 'prism-react-renderer/themes/synthwave84';
import ultramin from 'prism-react-renderer/themes/ultramin';
import vsDark from 'prism-react-renderer/themes/vsDark';
import * as cssInJs from '@rocket.chat/css-in-js';
import * as hooks from '@rocket.chat/fuselage-hooks';

import * as components from '..';

const scope = { components, React, cssInJs, hooks };

const { Box, Select, Margins, Callout } = components;
const { useState } = React;

const themeList = {
  dracula,
  duotoneDark,
  duotoneLight,
  github,
  nightOwl,
  nightOwlLight,
  oceanicNext,
  palenight,
  shadesOfPurple,
  synthwave84,
  ultramin,
  vsDark,
};

const themeOptions = Object.keys(themeList).map((key) => [key, key]);

const previewOptions = [
  ['right', 'On the Right'],
  ['bottom', 'On the Bottom'],
];

const heightStyle = { height: '500px', width: '100%' };

const initialCode = `() => {
  // Scope includes {components, hooks, React, cssInJs}
  const { Box, Button, Icon } = components;

  return <Box w='full' h='full' display='flex' flexDirection='row' alignItems='center' justifyContent='space-around' backgroundColor='primary-900'>
    <Button primary danger><Icon name='trash' /> Delete</Button>
    <Button primary><Icon name='send' /> Send</Button>
  </Box>;
}`;

const TestSection = (props) => {
  const [theme, setTheme] = useState('dracula');
  const [previewPosition, setPreviewPosition] = useState('right');
  console.log(themeOptions);
  return <Box w='full' h='full' display='flex' flexDirection='column'>

    <Box display='flex' flexDirection='column' margin='x12'>
      Theme:
      <Select options={themeOptions} value={theme} onChange={(val) => setTheme(val)} mbs='x4' mbe='x8'/>
      Preview position:
      <Select options={previewOptions} value={previewPosition} onChange={(val) => setPreviewPosition(val)} mbs='x4' mbe='x8'/>
    </Box>

    <LiveProvider code={initialCode} theme={themeList[theme]} scope={scope} {...props}>
      <Margins all='x12'>

        <Box display='flex' flexDirection={previewPosition === 'right' ? 'row' : 'column'} justifyContent='space-around'>
          <Box flexGrow={1} flexShrink={0} flexBasis='50%' h='full' border='1px solid #999'>
            <LiveEditor wrap style={heightStyle}/>
          </Box>

          <Box flexGrow={1} flexShrink={0} flexBasis='50%' h='full' border='1px solid #999'>
            <LivePreview style={heightStyle}/>
          </Box>
        </Box>

        <Callout type='danger'>
          <LiveError />
        </Callout>

      </Margins>
    </LiveProvider>
  </Box>;
};

export default TestSection;
