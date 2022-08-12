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
    const children = screen.getByText('Children');
    expect(children).toBeInTheDocument();
  });

  it('should display button, when component receives onClick property', () => {
    render(<CopyButton />);
    const button = screen.getByTestId('code-snippet-button-box');
    expect(button).toBeInTheDocument();
  });

  it('should call onClick function when button is clicked', () => {
    const onClickSpy = jest.fn();
    render(<CopyButton onClick={onClickSpy} />);
    const button = screen.getByTestId('code-snippet-button-box');
    button.click();
    expect(onClickSpy).toHaveBeenCalled();
  });

  it('should change button name, when buttonText property is passed', () => {
    render(<CustomButtonName buttonText='custom-name' />);
    const button = screen.getByText('custom-name');
    expect(button).toBeInTheDocument();
  });

  it('should display skeleton, when there is no children', () => {
    render(<LoadingCode />);
    const skeleton = screen.getByTestId('code-snippet-skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});
