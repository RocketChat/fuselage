/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import * as stories from './Slider.stories';

const { Default, WithLabel, MultiThumb, WithDefaultValue } =
  composeStories(stories);

describe('[Slider Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });

  it('should display the label when passed', () => {
    render(<WithLabel />);
    const label = screen.queryByText('Range');
    expect(label).toBeInTheDocument();
    expect(label?.textContent).toBe('Range');
  });

  it('should output the defaultValue when passed', () => {
    render(<WithDefaultValue />);
    const output = screen.queryByTestId('slider-output');
    expect(output?.textContent).toBe('25');
  });

  it('should have two thumbs when multiThumb prop is true', () => {
    render(<MultiThumb />);
    const thumbs = screen.queryAllByRole('slider');
    expect(thumbs.length).toBe(2);
  });

  it("should update Thumb's position when Thumb is clicked and dragged", () => {
    render(<Default />);

    const slider = screen.getByRole<HTMLFormElement>('slider');

    userEvent.tab();
    userEvent.type(slider, '{arrowright}{arrowright}{arrowright}{arrowright}', {
      skipClick: true,
    });

    expect(slider.value).toBe('4');
  });
});
