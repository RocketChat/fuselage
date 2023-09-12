import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';

import * as stories from './RadioButton.stories';

const testCases = Object.values(composeStories(stories))
  .filter((story) => story.storyName !== 'States')
  .map((Story) => [Story.storyName || 'Story', Story]);

const { Default, Checked, Disabled } = composeStories(stories);

describe('[RadioButton Rendering]', () => {
  test.each(testCases)(
    `renders %s without crashing`,
    async (_storyname, Story) => {
      const tree = render(<Story />);
      expect(tree.baseElement).toMatchSnapshot();
    }
  );

  test.each(testCases)(
    '%s should have no a11y violations',
    async (_storyname, Story) => {
      const { container } = render(<Story />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    }
  );
});

describe('[RadioButton Interacting]', () => {
  it('changes style of element as radio button is checked', () => {
    const { container } = render(<Default />);
    const radioButton = container.querySelector(
      'input[type="radio"]'
    ) as HTMLInputElement;
    radioButton.click();
    expect(radioButton.checked).toEqual(true);
  });
  it('displays radio button with defaultChecked value correctly', () => {
    const { container } = render(<Checked />);
    const radioButton = container.querySelector(
      'input[type="radio"]'
    ) as HTMLInputElement;
    expect(radioButton.defaultChecked).toEqual(true);
  });
  it('displays radio button disabled correctly', () => {
    const { container } = render(<Disabled />);
    const radioButton = container.querySelector(
      'input[type="radio"]'
    ) as HTMLInputElement;
    expect(radioButton.disabled).toEqual(true);
  });
});
