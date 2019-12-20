import React from 'react';
import ReactDOM from 'react-dom';

import { Skeleton } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Skeleton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
