import React from 'react';
import ReactDOM from 'react-dom';

import { FieldGroup } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FieldGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
