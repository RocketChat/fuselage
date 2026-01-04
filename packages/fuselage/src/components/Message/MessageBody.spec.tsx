import { axe } from 'jest-axe';

import { render } from '../../testing';

import MessageBody from './MessageBody';

describe('[MessageBody Component]', () => {
  it('renders without crashing', () => {
    render(<MessageBody>Test content</MessageBody>);
  });

  describe('Accessibility', () => {
    it('should have no a11y violations', async () => {
      const { container } = render(
        <MessageBody>Test message content</MessageBody>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have role="region"', () => {
      const { container } = render(
        <MessageBody>Test content</MessageBody>
      );
      const body = container.querySelector('.rcx-message-body');
      expect(body).toHaveAttribute('role', 'region');
    });

    it('should have aria-label', () => {
      const { container } = render(
        <MessageBody>Test content</MessageBody>
      );
      const body = container.querySelector('.rcx-message-body');
      expect(body).toHaveAttribute('aria-label', 'Message content');
    });

    it('should apply clamp class when clamp prop is provided', () => {
      const { container } = render(
        <MessageBody clamp={2}>Test content</MessageBody>
      );
      const body = container.querySelector('.rcx-message-body');
      expect(body).toHaveClass('rcx-message-body--clamp');
      expect(body).toHaveClass('rcx-message-body--clamp-2');
    });

    it('should handle different clamp values', () => {
      const { container: container2 } = render(
        <MessageBody clamp={3}>Test content</MessageBody>
      );
      const body2 = container2.querySelector('.rcx-message-body');
      expect(body2).toHaveClass('rcx-message-body--clamp-3');

      const { container: container3 } = render(
        <MessageBody clamp={4}>Test content</MessageBody>
      );
      const body3 = container3.querySelector('.rcx-message-body');
      expect(body3).toHaveClass('rcx-message-body--clamp-4');
    });
  });
});
