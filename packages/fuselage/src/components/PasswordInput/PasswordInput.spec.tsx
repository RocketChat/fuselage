import { composeStories } from '@storybook/react-webpack5';
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

  it('toggles password visibility with an accessible button', async () => {
    const { getByLabelText, getByRole } = render(<Default />);
    const input = getByLabelText('password');
    const toggleButton = getByRole('button', { name: 'Show password' });

    expect(input).toHaveAttribute('type', 'password');
    expect(toggleButton).toHaveAttribute('aria-pressed', 'false');

    await userEvent.click(toggleButton);

    expect(input).toHaveAttribute('type', 'text');
    const hideButton = getByRole('button', { name: 'Hide password' });
    expect(hideButton).toHaveAttribute('aria-pressed', 'true');

    hideButton.focus();
    await userEvent.keyboard('{Enter}');

    expect(input).toHaveAttribute('type', 'password');
    expect(getByRole('button', { name: 'Show password' })).toHaveAttribute(
      'aria-pressed',
      'false',
    );
  });
});
