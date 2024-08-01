import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import * as stories from './Menu.stories';

withResizeObserverMock();

const { Simple } = composeStories(stories);

describe('[Menu Component]', () => {
  const menuOption = screen.queryByText('Make Admin');

  it('should renders without crashing', () => {
    render(<Simple {...Simple.args} />);
  });

  it('should open options when click', async () => {
    const { getByTestId } = render(<Simple {...Simple.args} />);
    const button = getByTestId('menu');
    await userEvent.click(button);
    expect(await screen.findByText('Make Admin')).toBeInTheDocument();
  });

  it('should have no options when click twice', async () => {
    const { getByTestId } = render(<Simple {...Simple.args} />);
    const button = getByTestId('menu');
    await userEvent.click(button);
    await userEvent.click(button);
    expect(menuOption).toBeNull();
  });

  it('should have no options when click on menu and then elsewhere', async () => {
    const { getByTestId } = render(<Simple {...Simple.args} />);
    const button = getByTestId('menu');
    await userEvent.click(button);
    await userEvent.click(document.body);
    expect(menuOption).toBeNull();
  });
});
