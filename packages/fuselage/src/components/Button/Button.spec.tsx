import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import * as stories from './Button.stories';
import * as iconButtonStories from './IconButton.stories';

const { Default, AsIconButton } = composeStories(stories);
const { _IconButton, _IconButtonInfo, _IconButtonSuccess } =
  composeStories(iconButtonStories);

describe('[Button Component]', () => {
  it('renders Button without crashing', () => {
    render(<Default />, { legacyRoot: true });
  });

  it('renders ActionButton without crashing', () => {
    render(<AsIconButton />, { legacyRoot: true });
  });

  it('should have no a11y violations', async () => {
    const { container } = render(<Default />, { legacyRoot: true });

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('[IconButton Component]', () => {
  it('renders IconButton without crashing', () => {
    render(<AsIconButton />, { legacyRoot: true });
  });

  it('IconButton default should have no a11y violations', async () => {
    const { container } = render(<_IconButton />, { legacyRoot: true });

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('IconButtonInfo should have no a11y violations', async () => {
    const { container } = render(<_IconButtonInfo />, { legacyRoot: true });

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('IconButtonSuccess should have no a11y violations', async () => {
    const { container } = render(<_IconButtonSuccess />, { legacyRoot: true });

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
