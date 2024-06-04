import { composeStories } from '@storybook/testing-react';
import { render, getByRole, screen, fireEvent } from '@testing-library/react';

import * as stories from './ToastBar.stories';
import ToastBarProvider from './ToastBarProvider';

const { Default, TopEnd } = composeStories(stories, {
  decorators: [
    (Story) => (
      <ToastBarProvider>
        <Story />
      </ToastBarProvider>
    ),
  ],
});

const topEndStyle = {
  top: '0',
  right: '0',
};

const topStartStyle = {
  top: '0',
  left: '0',
};

describe('[fuselage-toastbar]', () => {
  test('should dispatch the ToastBar on click', async () => {
    const { container } = render(<Default />);
    const button = getByRole(container, 'button');

    fireEvent.click(button);
    const toasts = screen.queryAllByRole('alert');
    expect(toasts).toBeInTheDocument;
  });

  test('should display ToastBar on the top right of the screen by default', async () => {
    render(<TopEnd />);
    const toast = screen.queryByRole('alert');
    const toastContainer = toast?.parentElement?.parentElement?.parentElement;

    expect(toastContainer).toHaveStyle(topEndStyle);
  });

  test('should display ToastBar on the top right of the screen', async () => {
    const { rerender } = render(<TopEnd />);
    document.body.setAttribute('dir', 'ltr');
    rerender(<TopEnd />);
    const toast = screen.queryByRole('alert');
    const toastContainer = toast?.parentElement?.parentElement?.parentElement;

    expect(toastContainer).toHaveStyle(topEndStyle);
  });

  test('should ToastBar be displayed on the top left of the screen', async () => {
    document.body.setAttribute('dir', 'rtl');
    render(<TopEnd />);
    const toast = screen.queryByRole('alert');
    const toastContainer = toast?.parentElement?.parentElement?.parentElement;

    expect(toastContainer).toHaveStyle(topStartStyle);
  });
});
