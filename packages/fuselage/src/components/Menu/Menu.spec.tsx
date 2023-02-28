import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { testsFromStories } from '../../helpers/tests';
import * as stories from './Menu.stories';

withResizeObserverMock();

testsFromStories(stories);

const { Simple } = composeStories(stories);

const menuOption = screen.queryByText('Make Admin');

it('should open options when click', async () => {
  const { getByTestId } = render(<Simple {...Simple.args} />);
  const button = getByTestId('menu');
  userEvent.click(button);
  expect(await screen.findByText('Make Admin')).toBeInTheDocument();
});

it('should have no options when click twice', async () => {
  const { getByTestId } = render(<Simple {...Simple.args} />);
  const button = getByTestId('menu');
  userEvent.click(button);
  userEvent.click(button);
  expect(menuOption).toBeNull();
});

it('should have no options when click on menu and then elsewhere', async () => {
  const { getByTestId } = render(<Simple {...Simple.args} />);
  const button = getByTestId('menu');
  userEvent.click(button);
  userEvent.click(document.body);
  expect(menuOption).toBeNull();
});
