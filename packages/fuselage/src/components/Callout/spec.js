import React from 'react';
import ReactDOM from 'react-dom';

import { Callout } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Callout title='' />, div);
  ReactDOM.unmountComponentAtNode(div);
});
