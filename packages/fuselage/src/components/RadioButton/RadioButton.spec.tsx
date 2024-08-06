import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import * as stories from './RadioButton.stories';

const testCases = Object.values(composeStories(stories)).map((Story) => [
  Story.storyName || 'Story',
  Story,
]);

const { Default, Checked, Disabled } = composeStories(stories);

describe('[RadioButton Rendering]', () => {
  test.each(testCases)(
    `renders %s without crashing`,
    async (_storyname, Story) => {
      const tree = render(<Story />, { legacyRoot: true });
      expect(tree.baseElement).toMatchSnapshot();
    }
  );

  test.each(testCases)(
    '%s should have no a11y violations',
    async (_storyname, Story) => {
      const { container } = render(<Story />, { legacyRoot: true });

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    }
  );
});

describe('[RadioButton Interacting]', () => {
  it('changes style of element as radio button is checked', () => {
    const { container } = render(<Default />, { legacyRoot: true });
    const radioButton = container.querySelector(
      'input[type="radio"]'
    ) as HTMLInputElement;
    radioButton.click();
    expect(radioButton.checked).toEqual(true);
  });
  it('displays radio button with defaultChecked value correctly', () => {
    const { container } = render(<Checked />, { legacyRoot: true });
    const radioButton = container.querySelector(
      'input[type="radio"]'
    ) as HTMLInputElement;
    expect(radioButton.defaultChecked).toEqual(true);
  });
  it('displays radio button disabled correctly', () => {
    const { container } = render(<Disabled />, { legacyRoot: true });
    const radioButton = container.querySelector(
      'input[type="radio"]'
    ) as HTMLInputElement;
    expect(radioButton.disabled).toEqual(true);
  });
});
