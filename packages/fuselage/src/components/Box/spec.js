import { css } from '@rocket.chat/css-in-js';
import React from 'react';
import ReactDOM from 'react-dom';

import { Box } from '../..';

it('renders without crashing', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Box />, root);
  ReactDOM.unmountComponentAtNode(root);
});

it('accepts a string in className prop', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Box className='fuselage' />, root);

  const div = root.firstChild;
  expect(div.classList).toContainEqual('rcx-box');
  expect(div.classList).toContainEqual('fuselage');
});

it('accepts a css tagged template string in className prop', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Box className={css`width: 10em;`} />, root);

  const div = root.firstChild;
  expect(div.classList).toContainEqual('rcx-box');
  expect(div.classList).toContainEqual(expect.stringMatching(/^rcx-@/));
  expect(getComputedStyle(div).width).toBe('10em');
});

it('accepts an empty array in className prop', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Box className={[]} />, root);

  const div = root.firstChild;
  expect(div.classList).toContainEqual('rcx-box');
});

it('accepts an array of values in className prop', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Box className={['fuselage', css`width: 10em;`]} />, root);

  const div = root.firstChild;
  expect(div.classList).toContainEqual('rcx-box');
  expect(div.classList).toContainEqual('fuselage');
  expect(div.classList).toContainEqual(expect.stringMatching(/^rcx-@/));
  expect(getComputedStyle(div).width).toBe('10em');
});

it('attaches rcx-* props into className', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Box
    rcx-test-a
    rcx-test-b={false}
    rcx-test-c={true}
    rcx-test='d'
  />, root);

  const div = root.firstChild;
  expect(div.classList).toContain('rcx-box');
  expect(div.classList).toContain('rcx-test-a');
  expect(div.classList).not.toContain('rcx-test-b');
  expect(div.classList).toContain('rcx-test-c');
  expect(div.classList).toContain('rcx-test-d');
});

it('merge rcx-* props and an empty array into className', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Box
    className={[]}
    rcx-test-a
    rcx-test-b={false}
    rcx-test-c={true}
    rcx-test='d'
  />, root);

  const div = root.firstChild;
  expect(div.classList).toContain('rcx-box');
  expect(div.classList).toContain('rcx-test-a');
  expect(div.classList).not.toContain('rcx-test-b');
  expect(div.classList).toContain('rcx-test-c');
  expect(div.classList).toContain('rcx-test-d');
});

it('merge rcx-* props and an array of values into className', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Box
    className={['fuselage', css`width: 10em;`]}
    rcx-test-a
    rcx-test-b={false}
    rcx-test-c={true}
    rcx-test='d'
  />, root);

  const div = root.firstChild;
  expect(div.classList).toContain('rcx-box');
  expect(div.classList).toContain('rcx-test-a');
  expect(div.classList).not.toContain('rcx-test-b');
  expect(div.classList).toContain('rcx-test-c');
  expect(div.classList).toContain('rcx-test-d');
  expect(div.classList).toContainEqual('fuselage');
  expect(div.classList).toContainEqual(expect.stringMatching(/^rcx-@/));
  expect(getComputedStyle(div).width).toBe('10em');
});
