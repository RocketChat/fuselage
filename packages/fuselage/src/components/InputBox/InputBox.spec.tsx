import { composeStories } from '@storybook/react-webpack5';
import { waitFor } from '@testing-library/dom';
import { axe } from 'jest-axe';
import { useEffect, useState } from 'react';

import { render } from '../../testing';

import * as stories from './InputBox.stories';

const { Default, WithAddon } = composeStories(stories);

describe('[InputBox Component]', () => {
  it('renders without crashing', () => {
    const tree = render(<Default />);
    expect(tree.baseElement).toMatchSnapshot();
  });

  it('%s should have no a11y violations', async () => {
    const { container } = render(<Default />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

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
});
