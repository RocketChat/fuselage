import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './CodeSnippet.stories';

const { Default, CopyButton, CustomButtonName, LoadingCode, DisabledButton } =
  composeStories(stories);

describe('[CodeSnippet Component]', () => {
  it('renders without crashing', () => {
    render(<Default />, { legacyRoot: true });
  });

  it('should display children', () => {
    render(<Default>Children</Default>, { legacyRoot: true });
    screen.getByText('Children');
  });

  describe('Button behavior', () => {
    let onClickSpy: ReturnType<typeof jest.fn>;
    beforeEach(() => {
      onClickSpy = jest.fn();
      render(<CopyButton onClick={onClickSpy} />, { legacyRoot: true });
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
    render(<CustomButtonName buttonText='custom-name' />, { legacyRoot: true });
    screen.getByText('custom-name');
  });

  it('should display skeleton, when there is no children', () => {
    const { container } = render(<LoadingCode />, { legacyRoot: true });
    expect(container.querySelector('.rcx-skeleton')).toBeInTheDocument();
  });

  it('should should render a disabled button, when buttonDisabled prop is passed', () => {
    render(<DisabledButton />, { legacyRoot: true });
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
