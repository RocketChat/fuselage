import { composeStories } from '@storybook/react-webpack5';
import { waitFor } from '@testing-library/dom';
import { axe } from 'jest-axe';
import { useEffect, useState } from 'react';

import { render } from '../../testing';
import InputBox from './InputBox';

import * as stories from './InputBox.stories';

const { WithAddon } = composeStories(stories);

const testCases = Object.values(composeStories(stories)).map((Story) => [
  Story.storyName || 'Story',
  Story,
]);

test.each(testCases)(
  `renders %s without crashing`,
  async (_storyname, Story) => {
    const tree = render(<Story />);
    expect(tree.baseElement).toMatchSnapshot();
  },
);

test.each(testCases)(
  '%s should have no a11y violations',
  async (_storyname, Story) => {
    const { container } = render(<Story />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  },
);

it('should update error class when error changes asynchronously', async () => {
  const TestComponent = () => {
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
      setTimeout(() => {
        setError('Error');
      }, 100);
    }, []);

    return <WithAddon aria-label='test-input' error={error} />;
  };

  const { getByRole } = render(<TestComponent />);

  await waitFor(() => {
    const input = getByRole('textbox', { name: /test-input/i })
      .parentElement as HTMLElement;
    expect(input).toHaveClass('invalid');
  });
});

describe('date picker addon', () => {
  it('renders a button with an accessible name', () => {
    const { getByRole } = render(
      <InputBox type='date' aria-label='Date input' />,
    );
    const button = getByRole('button', { name: /open date picker/i });
    expect(button).toBeInTheDocument();
  });

  it('button is disabled when input is disabled', () => {
    const { getByRole } = render(
      <InputBox type='date' aria-label='Date input' disabled />,
    );
    const button = getByRole('button', { name: /open date picker/i });
    expect(button).toBeDisabled();
  });

  it('button is disabled when input is readOnly', () => {
    const { getByRole } = render(
      <InputBox type='date' aria-label='Date input' readOnly />,
    );
    const button = getByRole('button', { name: /open date picker/i });
    expect(button).toBeDisabled();
  });
});

describe('time picker addon', () => {
  it('renders a button with an accessible name', () => {
    const { getByRole } = render(
      <InputBox type='time' aria-label='Time input' />,
    );
    const button = getByRole('button', { name: /open time picker/i });
    expect(button).toBeInTheDocument();
  });

  it('button is disabled when input is disabled', () => {
    const { getByRole } = render(
      <InputBox type='time' aria-label='Time input' disabled />,
    );
    const button = getByRole('button', { name: /open time picker/i });
    expect(button).toBeDisabled();
  });

  it('button is disabled when input is readOnly', () => {
    const { getByRole } = render(
      <InputBox type='time' aria-label='Time input' readOnly />,
    );
    const button = getByRole('button', { name: /open time picker/i });
    expect(button).toBeDisabled();
  });
});
