import React from 'react';
import ReactDOM from 'react-dom';

import { Table } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Table />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Head', () => {
  it('renders without crashing', () => {
    const table = document.createElement('table');
    ReactDOM.render(<Table.Head />, table);
    ReactDOM.unmountComponentAtNode(table);
  });
});

describe('Body', () => {
  it('renders without crashing', () => {
    const table = document.createElement('table');
    ReactDOM.render(<Table.Body />, table);
    ReactDOM.unmountComponentAtNode(table);
  });
});

describe('Foot', () => {
  it('renders without crashing', () => {
    const table = document.createElement('table');
    ReactDOM.render(<Table.Foot />, table);
    ReactDOM.unmountComponentAtNode(table);
  });
});

describe('Row', () => {
  it('renders without crashing', () => {
    const tbody = document.createElement('tbody');
    ReactDOM.render(<Table.Row />, tbody);
    ReactDOM.unmountComponentAtNode(tbody);
  });
});

describe('Cell', () => {
  it('renders without crashing', () => {
    const tr = document.createElement('tr');
    ReactDOM.render(<Table.Cell />, tr);
    ReactDOM.unmountComponentAtNode(tr);
  });
});
