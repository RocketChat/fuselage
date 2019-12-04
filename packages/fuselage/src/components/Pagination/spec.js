import React from 'react';
import ReactDOM from 'react-dom';

import { Pagination } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pagination count={0} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
