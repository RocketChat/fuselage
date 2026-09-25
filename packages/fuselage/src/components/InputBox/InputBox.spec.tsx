import { composeStories } from '@storybook/react-webpack5';
import { waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
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

describe.each(['date', 'time'] as const)('%s picker addon', (type) => {
  it('opens the picker with Enter and Space', async () => {
    const user = userEvent.setup();
    const { getByLabelText, getByRole } = render(
      <InputBox type={type} aria-label={type} />,
    );
    const input = getByLabelText(type) as HTMLInputElement;
    const showPicker = jest.fn();
    input.showPicker = showPicker;

    await user.tab();
    expect(input).toHaveFocus();
    await user.tab();
    expect(getByRole('button', { name: `Open ${type} picker` })).toHaveFocus();

    await user.keyboard('{Enter}');
    await user.keyboard(' ');

    expect(showPicker).toHaveBeenCalledTimes(2);
  });

  it.each(['disabled', 'readOnly'] as const)(
    'does not allow opening the picker when %s',
    (state) => {
      const { getByRole } = render(
        <InputBox type={type} aria-label={type} {...{ [state]: true }} />,
      );

      expect(
        getByRole('button', { name: `Open ${type} picker` }),
      ).toBeDisabled();
    },
  );
});
