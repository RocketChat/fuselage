import { composeStories } from '@storybook/react';
import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { render } from '../../testing';

import * as stories from './Menu.stories';

withResizeObserverMock();

const { Simple } = composeStories(stories);

describe('[Menu Component]', () => {
  it('should renders without crashing', () => {
    render(<Simple {...Simple.args} />);
  });

  it('should open options when click', async () => {
    render(<Simple {...Simple.args} />);
    expect(screen.queryByText('Make Admin')).not.toBeInTheDocument();
    const button = screen.getByTestId('menu');
    await userEvent.click(button);
    await waitFor(() =>
      expect(screen.getByText('Make Admin')).toBeInTheDocument(),
    );
  });

  // FIXME: options are not being removed because `AnimatedVisibility` relies on
  // `onAnimationEnd` event which is not being triggered by jsdom

  it.skip('should have no options when click twice', async () => {
    render(<Simple {...Simple.args} />);

    const button = screen.getByTestId('menu');
    await userEvent.click(button);
    await waitFor(() =>
      expect(screen.getByText('Make Admin')).toBeInTheDocument(),
    );
    await userEvent.click(button);
    await waitForElementToBeRemoved(() => screen.queryByText('Make Admin'));
  });

  it.skip('should have no options when click on menu and then elsewhere', async () => {
    render(<Simple {...Simple.args} />);

    const button = screen.getByTestId('menu');
    await userEvent.click(button);
    await waitFor(() =>
      expect(screen.getByText('Make Admin')).toBeInTheDocument(),
    );
    await userEvent.click(document.body);
    await waitForElementToBeRemoved(() => screen.getByText('Make Admin'));
  });
});
