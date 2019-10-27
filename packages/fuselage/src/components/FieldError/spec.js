import React from 'react';
import ReactDOM from 'react-dom';

import { FieldError } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FieldError>Error</FieldError>, div);
  ReactDOM.unmountComponentAtNode(div);
});
