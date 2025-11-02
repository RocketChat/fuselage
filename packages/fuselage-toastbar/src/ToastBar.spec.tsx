import { composeStories } from '@storybook/react-vite';
import { cleanup, getByRole, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, test } from 'vitest';

import * as stories from './ToastBar.stories.js';
import ToastBarProvider from './ToastBarProvider.js';
import { render } from './testing.js';

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

beforeEach(() => {
  cleanup();
});

describe('[fuselage-toastbar rendering]', () => {
  test('should display ToastBar on the top right of the screen by default', async () => {
    render(<TopEnd />);
    const toast = screen.queryByRole('alert');
    const toastContainer = toast?.parentElement?.parentElement?.parentElement;

    expect(toastContainer).toHaveStyle(topEndStyle);
  });

  test('should display ToastBar on the top right of the screen', async () => {
    document.body.setAttribute('dir', 'ltr');
    render(<TopEnd />);
    const toast = screen.queryByRole('alert');
    const toastContainer = toast?.parentElement?.parentElement?.parentElement;

    expect(toastContainer).toHaveStyle(topEndStyle);
  });

  test('should display ToastBar on the top left of the screen', async () => {
    document.body.setAttribute('dir', 'rtl');
    render(<TopEnd />);
    const toast = screen.queryByRole('alert');
    const toastContainer = toast?.parentElement?.parentElement?.parentElement;

    expect(toastContainer).toHaveStyle(topStartStyle);
  });
});

describe('[fuselage-toastbar interacting]', () => {
  test('should dispatch the ToastBar on click', async () => {
    const { container } = render(<Default />);
    const button = getByRole(container, 'button');

    userEvent.click(button);
    const toasts = screen.queryAllByRole('alert');
    toasts.forEach((toast) => expect(toast).toBeInTheDocument());
  });
});
