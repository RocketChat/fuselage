import { composeStories } from '@storybook/react-webpack5';
import { axe } from 'jest-axe';

import { render } from '../../testing';

import * as stories from './Messages.stories';

const { Default } = composeStories(stories);

describe('[Message Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });

  describe('Accessibility', () => {
    it('should have no a11y violations', async () => {
      const { container } = render(<Default />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have role="article" on message container', () => {
      const { container } = render(<Default />);
      const message = container.querySelector('.rcx-message');
      expect(message).toHaveAttribute('role', 'article');
    });

    it('should have aria-label on message container', () => {
      const { container } = render(<Default />);
      const message = container.querySelector('.rcx-message');
      expect(message).toHaveAttribute('aria-label');
    });

    it('should be keyboard accessible when clickable', () => {
      const onClick = jest.fn();
      const { container } = render(
        <Default onClick={onClick} clickable />
      );
      const message = container.querySelector('.rcx-message');
      expect(message).toHaveAttribute('tabIndex', '0');
    });

    it('should indicate pending state with aria-busy', () => {
      const { container } = render(<Default isPending />);
      const message = container.querySelector('.rcx-message');
      expect(message).toHaveAttribute('aria-busy', 'true');
    });

    it('should indicate selected state with aria-selected', () => {
      const { container } = render(<Default isSelected />);
      const message = container.querySelector('.rcx-message');
      expect(message).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('Keyboard Navigation', () => {
    it('should be focusable when clickable', () => {
      const { container } = render(<Default clickable />);
      const message = container.querySelector('.rcx-message');
      expect(message).toHaveAttribute('tabIndex', '0');
    });

    it('should not be focusable when not clickable', () => {
      const { container } = render(<Default />);
      const message = container.querySelector('.rcx-message');
      expect(message).not.toHaveAttribute('tabIndex');
    });
  });

  describe('ARIA Attributes', () => {
    it('should support custom aria-label', () => {
      const { container } = render(
        <Default aria-label="Custom message label" />
      );
      const message = container.querySelector('.rcx-message');
      expect(message).toHaveAttribute('aria-label', 'Custom message label');
    });
  });
});
