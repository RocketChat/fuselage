import React from 'react';
import ReactDOM from 'react-dom';

import { ProgressBar } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProgressBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
