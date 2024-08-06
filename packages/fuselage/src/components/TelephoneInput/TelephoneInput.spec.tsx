import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import * as stories from './TelephoneInput.stories';

const { Default } = composeStories(stories);

describe('[TelephoneInput Component]', () => {
  it('renders without crashing', () => {
    const tree = render(<Default />, { legacyRoot: true });
    expect(tree.baseElement).toMatchSnapshot();
  });

  it('%s should have no a11y violations', async () => {
    const { container } = render(<Default />, { legacyRoot: true });

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
