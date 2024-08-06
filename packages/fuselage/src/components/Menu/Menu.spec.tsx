import { composeStories } from '@storybook/react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import * as stories from './Menu.stories';

withResizeObserverMock();

const { Simple } = composeStories(stories);

describe('[Menu Component]', () => {
  const menuOption = screen.queryByText('Make Admin');

  it('should renders without crashing', () => {
    render(<Simple {...Simple.args} />, { legacyRoot: true });
  });

  it('should open options when click', async () => {
    render(<Simple {...Simple.args} />, {
      legacyRoot: true,
    });
    const button = screen.getByTestId('menu');
    await act(async () => {
      await userEvent.click(button);
      expect(await screen.findByText('Make Admin')).toBeInTheDocument();
    });
  });

  it('should have no options when click twice', async () => {
    render(<Simple {...Simple.args} />, {
      legacyRoot: true,
    });
    const button = screen.getByTestId('menu');
    await userEvent.click(button);
    await act(async () => {
      await userEvent.click(button);
      expect(menuOption).toBeNull();
    });
  });

  it('should have no options when click on menu and then elsewhere', async () => {
    render(<Simple {...Simple.args} />, {
      legacyRoot: true,
    });
    const button = screen.getByTestId('menu');
    await act(async () => {
      await userEvent.click(button);
      await userEvent.click(document.body);
      expect(menuOption).toBeNull();
    });
  });
});
