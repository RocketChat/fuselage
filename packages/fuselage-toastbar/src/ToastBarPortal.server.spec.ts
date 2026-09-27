/** @jest-environment node */
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';

import ToastBarPortal from './ToastBarPortal';

it('renders without accessing the DOM on the server', () => {
  expect(renderToString(createElement(ToastBarPortal, null, 'Toast'))).toBe('');
});
