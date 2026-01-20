import { axe } from 'jest-axe';

import { render } from '../../testing';

import MessageHeader from './MessageHeader';

describe('[MessageHeader Component]', () => {
  it('renders without crashing', () => {
    render(<MessageHeader>Test header</MessageHeader>);
  });

  describe('Accessibility', () => {
    it('should have no a11y violations', async () => {
      const { container } = render(
        <MessageHeader>Test header content</MessageHeader>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have role="group"', () => {
      const { container } = render(
        <MessageHeader>Test header</MessageHeader>
      );
      const header = container.querySelector('.rcx-message-header');
      expect(header).toHaveAttribute('role', 'group');
    });

    it('should have aria-label', () => {
      const { container } = render(
        <MessageHeader>Test header</MessageHeader>
      );
      const header = container.querySelector('.rcx-message-header');
      expect(header).toHaveAttribute('aria-label', 'Message header');
    });

    it('should render children correctly', () => {
      const { getByText } = render(
        <MessageHeader>
          <span>Author Name</span>
          <span>Timestamp</span>
        </MessageHeader>
      );
      expect(getByText('Author Name')).toBeInTheDocument();
      expect(getByText('Timestamp')).toBeInTheDocument();
    });
  });
});
