import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { testsFromStories } from '../../helpers/tests';
import * as stories from './CodeSnippet.stories';

testsFromStories(stories);

const { Default, CopyButton, CustomButtonName, LoadingCode } =
  composeStories(stories);

it('should display children', () => {
  render(<Default>Children</Default>);
  screen.getByText('Children');
});

describe('Button behavior', () => {
  let onClickSpy: ReturnType<typeof jest.fn>;
  beforeEach(() => {
    onClickSpy = jest.fn();
    render(<CopyButton onClick={onClickSpy} />);
  });

  it('should display button, when component receives onClick property', () => {
    screen.getByRole('button');
  });

  it('should call onClick function when button is clicked', () => {
    const button = screen.getByRole('button');
    button.click();
    expect(onClickSpy).toHaveBeenCalled();
  });
});

it('should change button name, when buttonText property is passed', () => {
  render(<CustomButtonName buttonText='custom-name' />);
  screen.getByText('custom-name');
});

it('should display skeleton, when there is no children', () => {
  const { container } = render(<LoadingCode />);
  expect(container.querySelector('.rcx-skeleton')).toBeInTheDocument();
});
