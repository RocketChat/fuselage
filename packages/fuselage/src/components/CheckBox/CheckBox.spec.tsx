import { composeStories } from '@storybook/testing-react';
import { fireEvent, getByRole, render } from '@testing-library/react';
import React from 'react';

import * as stories from './CheckBox.stories';

const { Default, Indeterminate, Disabled, DefaultChecked } =
  composeStories(stories);

describe('[CheckBox Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
  it('changes style of element as checkbox is checked', () => {
    const { container } = render(<Default />);
    const checkbox = getByRole(container, 'checkbox') as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });
  it('changes style of element as checkbox is checked/unchecked', () => {
    const { container } = render(<Default />);
    const checkbox = getByRole(container, 'checkbox') as HTMLInputElement;
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
  });
  it('displays checkbox indeterminate correctly', () => {
    const { container } = render(<Indeterminate />);
    const checkbox = getByRole(container, 'checkbox') as HTMLInputElement;
    expect(checkbox.indeterminate).toEqual(true);
  });

  it('displays checkbox with defaultChecked value correctly', () => {
    const { container } = render(<DefaultChecked />);
    const checkbox = getByRole(container, 'checkbox') as HTMLInputElement;
    expect(checkbox.defaultChecked).toEqual(true);
  });

  it('displays checkbox disabled correctly', () => {
    const { container } = render(<Disabled />);
    const checkbox = getByRole(container, 'checkbox') as HTMLInputElement;
    expect(checkbox.disabled).toEqual(true);
  });
});
