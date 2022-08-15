import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import React from 'react';

import * as stories from './CodeSnippet.stories';

const { Default, CopyButton, CustomButtonName, LoadingCode } =
  composeStories(stories);

describe('[CodeSnippet Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });

  it('should display children', () => {
    render(<Default>Children</Default>);
    screen.getByText('Children');
  });

  it('should display button, when component receives onClick property', () => {
    render(<CopyButton />);
    screen.getByRole('button');
  });

  it('should call onClick function when button is clicked', () => {
    const onClickSpy = jest.fn();
    render(<CopyButton onClick={onClickSpy} />);
    const button = screen.getByRole('button');
    button.click();
    expect(onClickSpy).toHaveBeenCalled();
  });

  it('should change button name, when buttonText property is passed', () => {
    render(<CustomButtonName buttonText='custom-name' />);
    screen.getByText('custom-name');
  });

  it('should display skeleton, when there is no children', () => {
    render(<LoadingCode />);
    screen.getByTestId('code-snippet-skeleton');
  });
});
