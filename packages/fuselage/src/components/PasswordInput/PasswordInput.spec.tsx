import { composeStories } from '@storybook/react-webpack5';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { render } from '../../testing';

import * as stories from './PasswordInput.stories';

const { Default } = composeStories(stories);

describe('[PasswordInput Component]', () => {
  it('renders without crashing', () => {
    const tree = render(<Default />);
    expect(tree.baseElement).toMatchSnapshot();
  });

  it('%s should have no a11y violations', async () => {
    const { container } = render(<Default />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should toggle password visibility', async () => {
    const user = userEvent.setup();

    render(<Default />);

    const button = screen.getByRole('button', { name: 'Show password' });

    await user.click(button);

    expect(
      screen.getByRole('button', { name: 'Hide password' }),
    ).toBeInTheDocument();
  });

  it('should toggle password visibility with keyboard', async () => {
    const user = userEvent.setup();

    render(<Default />);

    const button = screen.getByRole('button', { name: 'Show password' });

    button.focus();

    await user.keyboard('{Enter}');

    expect(
      screen.getByRole('button', { name: 'Hide password' }),
    ).toBeInTheDocument();
  });

  it('should toggle password visibility with Space', async () => {
    const user = userEvent.setup();

    render(<Default />);

    const button = screen.getByRole('button', { name: 'Show password' });

    button.focus();

    await user.keyboard('{Space}');

    expect(
      screen.getByRole('button', { name: 'Hide password' }),
    ).toBeInTheDocument();
  });
});
