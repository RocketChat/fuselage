import { axe } from 'jest-axe';
import { fireEvent } from '@testing-library/react';

import { render } from '../../../testing';

import { MessageReaction } from './MessageReaction';
import { MessageReactionAction } from './MessageReactionAction';

describe('[MessageReaction Component]', () => {
  it('renders without crashing', () => {
    render(<MessageReaction name="smile" counter={5} />);
  });

  describe('Accessibility', () => {
    it('should have no a11y violations', async () => {
      const { container } = render(
        <MessageReaction name="smile" counter={5} />
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have role="button"', () => {
      const { container } = render(<MessageReaction name="smile" />);
      const reaction = container.querySelector('.rcx-message-reactions__reaction');
      expect(reaction).toHaveAttribute('role', 'button');
    });

    it('should be keyboard accessible', () => {
      const { container } = render(<MessageReaction name="smile" />);
      const reaction = container.querySelector('.rcx-message-reactions__reaction');
      expect(reaction).toHaveAttribute('tabIndex', '0');
    });

    it('should have descriptive aria-label', () => {
      const { container } = render(
        <MessageReaction name="smile" counter={5} />
      );
      const reaction = container.querySelector('.rcx-message-reactions__reaction');
      expect(reaction).toHaveAttribute('aria-label', 'smile, 5 reactions');
    });

    it('should indicate when user has reacted', () => {
      const { container } = render(
        <MessageReaction name="smile" counter={5} mine />
      );
      const reaction = container.querySelector('.rcx-message-reactions__reaction');
      expect(reaction).toHaveAttribute('aria-label', 'smile, 5 reactions, you reacted');
      expect(reaction).toHaveAttribute('aria-pressed', 'true');
    });

    it('should have aria-pressed false when user has not reacted', () => {
      const { container } = render(
        <MessageReaction name="smile" counter={5} mine={false} />
      );
      const reaction = container.querySelector('.rcx-message-reactions__reaction');
      expect(reaction).toHaveAttribute('aria-pressed', 'false');
    });
  });

  describe('Keyboard Navigation', () => {
    it('should trigger onClick when Enter key is pressed', () => {
      const onClick = jest.fn();
      const { container } = render(
        <MessageReaction name="smile" onClick={onClick} />
      );
      const reaction = container.querySelector('.rcx-message-reactions__reaction');
      
      fireEvent.keyDown(reaction!, { key: 'Enter' });
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should trigger onClick when Space key is pressed', () => {
      const onClick = jest.fn();
      const { container } = render(
        <MessageReaction name="smile" onClick={onClick} />
      );
      const reaction = container.querySelector('.rcx-message-reactions__reaction');
      
      fireEvent.keyDown(reaction!, { key: ' ' });
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should not trigger onClick for other keys', () => {
      const onClick = jest.fn();
      const { container } = render(
        <MessageReaction name="smile" onClick={onClick} />
      );
      const reaction = container.querySelector('.rcx-message-reactions__reaction');
      
      fireEvent.keyDown(reaction!, { key: 'a' });
      expect(onClick).not.toHaveBeenCalled();
    });

    it('should call custom onKeyDown handler', () => {
      const onKeyDown = jest.fn();
      const { container } = render(
        <MessageReaction name="smile" onKeyDown={onKeyDown} />
      );
      const reaction = container.querySelector('.rcx-message-reactions__reaction');
      
      fireEvent.keyDown(reaction!, { key: 'Tab' });
      expect(onKeyDown).toHaveBeenCalledTimes(1);
    });
  });

  describe('Visual States', () => {
    it('should apply mine class when user has reacted', () => {
      const { container } = render(
        <MessageReaction name="smile" mine />
      );
      const reaction = container.querySelector('.rcx-message-reactions__reaction');
      expect(reaction).toHaveClass('rcx-message-reactions__reaction--mine');
    });

    it('should not apply mine class when user has not reacted', () => {
      const { container } = render(
        <MessageReaction name="smile" mine={false} />
      );
      const reaction = container.querySelector('.rcx-message-reactions__reaction');
      expect(reaction).not.toHaveClass('rcx-message-reactions__reaction--mine');
    });
  });
});

describe('[MessageReactionAction Component]', () => {
  it('renders without crashing', () => {
    render(<MessageReactionAction />);
  });

  describe('Accessibility', () => {
    it('should have no a11y violations', async () => {
      const { container } = render(<MessageReactionAction />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have role="button"', () => {
      const { container } = render(<MessageReactionAction />);
      const action = container.querySelector('.rcx-message-reactions__reaction--action');
      expect(action).toHaveAttribute('role', 'button');
    });

    it('should be keyboard accessible', () => {
      const { container } = render(<MessageReactionAction />);
      const action = container.querySelector('.rcx-message-reactions__reaction--action');
      expect(action).toHaveAttribute('tabIndex', '0');
    });

    it('should have descriptive aria-label', () => {
      const { container } = render(<MessageReactionAction />);
      const action = container.querySelector('.rcx-message-reactions__reaction--action');
      expect(action).toHaveAttribute('aria-label', 'Add reaction');
    });
  });

  describe('Keyboard Navigation', () => {
    it('should trigger onClick when Enter key is pressed', () => {
      const onClick = jest.fn();
      const { container } = render(<MessageReactionAction onClick={onClick} />);
      const action = container.querySelector('.rcx-message-reactions__reaction--action');
      
      fireEvent.keyDown(action!, { key: 'Enter' });
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should trigger onClick when Space key is pressed', () => {
      const onClick = jest.fn();
      const { container } = render(<MessageReactionAction onClick={onClick} />);
      const action = container.querySelector('.rcx-message-reactions__reaction--action');
      
      fireEvent.keyDown(action!, { key: ' ' });
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
