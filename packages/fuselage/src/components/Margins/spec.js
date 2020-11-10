import React from 'react';
import ReactDOM from 'react-dom';

import { Margins } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Margins />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('patches non-`Box` children', () => {
  const root = document.createElement('div');
  ReactDOM.render(
    <Margins all='10px'>
      <div />
    </Margins>,
    root
  );

  const div = root.firstChild;
  expect(div.className).not.toBeFalsy();
});
