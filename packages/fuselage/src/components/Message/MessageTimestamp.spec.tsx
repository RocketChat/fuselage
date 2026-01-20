import { axe } from 'jest-axe';

import { render } from '../../testing';

import MessageTimestamp from './MessageTimestamp';

describe('[MessageTimestamp Component]', () => {
  it('renders without crashing', () => {
    render(<MessageTimestamp>10:30 AM</MessageTimestamp>);
  });

  describe('Accessibility', () => {
    it('should have no a11y violations', async () => {
      const { container } = render(
        <MessageTimestamp dateTime="2026-01-04T10:30:00Z">
          10:30 AM
        </MessageTimestamp>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should use semantic time element', () => {
      const { container } = render(
        <MessageTimestamp>10:30 AM</MessageTimestamp>
      );
      const timestamp = container.querySelector('time');
      expect(timestamp).toBeInTheDocument();
    });

    it('should have datetime attribute when provided', () => {
      const dateTime = '2026-01-04T10:30:00Z';
      const { container } = render(
        <MessageTimestamp dateTime={dateTime}>10:30 AM</MessageTimestamp>
      );
      const timestamp = container.querySelector('time');
      expect(timestamp).toHaveAttribute('dateTime', dateTime);
    });

    it('should render readable time text', () => {
      const { getByText } = render(
        <MessageTimestamp dateTime="2026-01-04T10:30:00Z">
          10:30 AM
        </MessageTimestamp>
      );
      expect(getByText('10:30 AM')).toBeInTheDocument();
    });

    it('should apply correct CSS classes', () => {
      const { container } = render(
        <MessageTimestamp>10:30 AM</MessageTimestamp>
      );
      const timestamp = container.querySelector('time');
      expect(timestamp).toHaveClass('rcx-message-header__time');
    });
  });
});
