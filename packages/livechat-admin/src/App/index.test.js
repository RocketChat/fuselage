import React from 'react';
import ReactDOM from 'react-dom';

import '../../mocks/matchMediaMock';
import { withLocation } from '../../mocks/routing';
import { App } from '.';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(withLocation(() => <App />), div);
  ReactDOM.unmountComponentAtNode(div);
});
