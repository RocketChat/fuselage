import { composeStories } from '@storybook/react-webpack5';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render } from '../../testing';

import Chip from './Chip';
import * as stories from './Chip.stories';

const { Default } = composeStories(stories);

describe('[Chevron Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});

describe('[Chip legacy dismiss]', () => {
  it('renders the whole chip as a button when onClick is provided', () => {
    const onClick = jest.fn();
    render(<Chip onClick={onClick}>Legacy chip</Chip>);

    const chipButton = screen.getByRole('button', { name: /Legacy chip/ });
    expect(chipButton.tagName).toBe('BUTTON');
  });
});

describe('[Chip onDismiss mode]', () => {
  it('renders a non-interactive root with a single dismiss button', () => {
    const onDismiss = jest.fn();
    render(<Chip onDismiss={onDismiss}>Marie Rowe</Chip>);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveAccessibleName('Dismiss');
  });

  it('uses a custom dismissLabel for the accessible name', () => {
    const onDismiss = jest.fn();
    render(
      <Chip onDismiss={onDismiss} dismissLabel='Remove'>
        Marie Rowe
      </Chip>,
    );

    expect(screen.getByRole('button', { name: 'Remove' })).toBeInTheDocument();
  });

  it('does not call onDismiss when clicking the chip body/text', async () => {
    const onDismiss = jest.fn();
    render(<Chip onDismiss={onDismiss}>Marie Rowe</Chip>);

    await userEvent.click(screen.getByText('Marie Rowe'));

    expect(onDismiss).not.toHaveBeenCalled();
  });

  it('calls onDismiss once when clicking the dismiss IconButton', async () => {
    const onDismiss = jest.fn();
    render(<Chip onDismiss={onDismiss}>Marie Rowe</Chip>);

    await userEvent.click(screen.getByRole('button', { name: 'Dismiss' }));

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('blocks the dismiss IconButton when disabled', () => {
    const onDismiss = jest.fn();
    render(
      <Chip onDismiss={onDismiss} disabled>
        Marie Rowe
      </Chip>,
    );

    expect(screen.getByRole('button', { name: 'Dismiss' })).toBeDisabled();
  });

  it('still fires onClick on body click without treating it as dismiss', async () => {
    const onClick = jest.fn();
    const onDismiss = jest.fn();
    render(
      <Chip onClick={onClick} onDismiss={onDismiss}>
        Marie Rowe
      </Chip>,
    );

    await userEvent.click(screen.getByText('Marie Rowe'));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onDismiss).not.toHaveBeenCalled();
  });
});
