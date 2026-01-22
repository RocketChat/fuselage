import { composeStories } from '@storybook/react-webpack5';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { render } from '../../../testing';

import * as stories from './Menu.stories';

withResizeObserverMock();

const { Simple, Complex, WithSections } = composeStories(stories);

const testCases = Object.values(composeStories(stories)).map((Story) => [
  Story.storyName || 'Story',
  Story,
]);

describe('[Menu V2 Component]', () => {
  test.each(testCases)(
    `renders %s without crashing`,
    async (_storyname, Story) => {
      const tree = render(<Story />);
      expect(tree.baseElement).toMatchSnapshot();
    },
  );

  test.each(testCases)(
    '%s should have no a11y violations',
    async (_storyname, Story) => {
      const { container } = render(<Story />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    },
  );

  describe('Rendering', () => {
    it('should render with custom title', () => {
      render(<Simple {...Simple.args} />);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('title', 'Simple Menu');
    });

    it('should render menu with sections', () => {
      render(<WithSections {...WithSections.args} />);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('should display all menu items when opened', async () => {
      render(<Simple {...Simple.args} />);

      const button = screen.getByRole('button');
      await userEvent.click(button);

      await waitFor(() => {
        expect(
          screen.getByRole('menuitem', { name: 'Profile' }),
        ).toBeInTheDocument();
        expect(
          screen.getByRole('menuitem', { name: 'Chats' }),
        ).toBeInTheDocument();
        expect(
          screen.getByRole('menuitem', { name: 'Settings' }),
        ).toBeInTheDocument();
      });
    });

    it('should display menu items with icons', async () => {
      render(<Complex {...Complex.args} />);

      const button = screen.getByRole('button');
      await userEvent.click(button);

      const menuitem = screen.getByRole('menuitem', { name: 'Profile' });
      expect(menuitem).toBeInTheDocument();

      await waitFor(() => {
        expect(menuitem.querySelector('i')).toBeInTheDocument();
      });
    });

    it('should display menu sections with titles', async () => {
      render(<WithSections {...WithSections.args} />);

      const button = screen.getByRole('button');
      await userEvent.click(button);

      await waitFor(() => {
        expect(
          screen.getByRole('group', { name: 'Styles' }),
        ).toBeInTheDocument();
        expect(
          screen.getByRole('menuitem', { name: 'Bold' }),
        ).toBeInTheDocument();
        expect(
          screen.getByRole('menuitem', { name: 'Underline' }),
        ).toBeInTheDocument();
      });
    });

    it('should close menu when clicked twice', async () => {
      render(<Simple {...Simple.args} />);

      const button = screen.getByRole('button');
      await userEvent.click(button);

      await waitFor(() => {
        expect(
          screen.getByRole('menuitem', { name: 'Profile' }),
        ).toBeInTheDocument();
      });

      await userEvent.click(button);

      expect(
        screen.queryByRole('menuitem', { name: 'Profile' }),
      ).not.toBeInTheDocument();
    });

    it('should close menu when clicking outside', async () => {
      render(<Simple {...Simple.args} />);

      const button = screen.getByRole('button');
      await userEvent.click(button);

      await waitFor(() => {
        expect(
          screen.getByRole('menuitem', { name: 'Profile' }),
        ).toBeInTheDocument();
      });

      await userEvent.click(document.body);

      expect(
        screen.queryByRole('menuitem', { name: 'Profile' }),
      ).not.toBeInTheDocument();
    });

    it('should close menu when selecting a menu item', async () => {
      render(<Simple {...Simple.args} />);

      const button = screen.getByRole('button');
      await userEvent.click(button);

      await waitFor(() => {
        expect(
          screen.getByRole('menuitem', { name: 'Profile' }),
        ).toBeInTheDocument();
      });

      const profileItem = screen.getByRole('menuitem', { name: 'Profile' });
      await userEvent.click(profileItem);

      expect(
        screen.queryByRole('menuitem', { name: 'Profile' }),
      ).not.toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should show aria-expanded when menu is open', async () => {
      render(<Simple {...Simple.args} />);

      const button = screen.getByRole('button');
      await userEvent.click(button);

      await waitFor(() => {
        expect(button).toHaveAttribute('aria-expanded', 'true');
      });
    });

    it('should have proper aria-label', () => {
      render(<Simple {...Simple.args} aria-label='User menu' />);

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'User menu');
    });

    it('should use title as aria-label when aria-label is not provided', () => {
      render(<Simple {...Simple.args} title='Settings menu' />);

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Settings menu');
    });

    it('should have proper aria-haspopup attribute when opened', async () => {
      render(<Simple {...Simple.args} />);

      const button = screen.getByRole('button');
      await userEvent.click(button);

      await waitFor(() => {
        expect(button).toHaveAttribute('aria-haspopup', 'true');
      });
    });
  });

  describe('Sizing', () => {
    it('should apply small size by default', () => {
      render(<Simple {...Simple.args} />);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('rcx-button--small-square');
    });

    it('should accept large size prop', () => {
      render(<Simple {...Simple.args} large />);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('rcx-button--large-square');
    });

    it('should accept medium size prop', () => {
      render(<Simple {...Simple.args} medium />);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('rcx-button--medium-square');
    });

    it('should accept tiny size prop', () => {
      render(<Simple {...Simple.args} tiny />);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('rcx-button--tiny-square');
    });

    it('should accept mini size prop', () => {
      render(<Simple {...Simple.args} mini />);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('rcx-button--mini-square');
    });
  });
});
