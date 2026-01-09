import { composeStories } from '@storybook/react-webpack5';
import { render, screen } from '../../testing';
import { axe, toHaveNoViolations } from 'jest-axe';
import * as stories from './Messages.stories';
import React from 'react';

expect.extend(toHaveNoViolations);

const { Default } = composeStories(stories);

describe('[Message Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<Default />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have role="article" for accessibility', () => {
    render(<Default />);
    // Since our refactor added role='article' to the root div
    expect(screen.getAllByRole('article')[0]).toBeInTheDocument();
  });

  it('should be focusable when it is a clickable message', () => {
    // Testing the tabIndex logic we added to Message.tsx
    const { container } = render(<Default clickable />);
    const messageElement = container.querySelector('.rcx-message');
    expect(messageElement).toHaveAttribute('tabIndex', '0');
  });

  it('should communicate selection state via aria-selected', () => {
    const { container } = render(<Default isSelected />);
    const messageElement = container.querySelector('.rcx-message');
    expect(messageElement).toHaveAttribute('aria-selected', 'true');
  });
});