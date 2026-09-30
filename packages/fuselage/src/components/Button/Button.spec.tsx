import { composeStories } from '@storybook/react-webpack5';
import { axe } from 'jest-axe';

import { render } from '../../testing';

import Button from './Button';
import * as stories from './Button.stories';

const { Default } = composeStories(stories);

describe('[Button Component]', () => {
  it('renders Button without crashing', () => {
    render(<Default />);
  });

  it('should have no a11y violations', async () => {
    const { container } = render(<Default />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('[Button external link icon]', () => {
  const externalProps = {
    is: 'a',
    href: 'https://rocket.chat',
    external: true,
  } as const;

  it('adds a new-window icon to external links', () => {
    const { container } = render(<Button {...externalProps}>Docs</Button>);

    expect(
      container.querySelector('.rcx-icon--name-new-window'),
    ).toBeInTheDocument();
  });

  it('lets a caller-supplied icon win', () => {
    const { container } = render(
      <Button {...externalProps} icon='balloon'>
        Docs
      </Button>,
    );

    expect(
      container.querySelector('.rcx-icon--name-new-window'),
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('.rcx-icon--name-balloon'),
    ).toBeInTheDocument();
  });

  it('omits the icon entirely when opted out with icon={false}', () => {
    const { container } = render(
      <Button {...externalProps} icon={false}>
        Docs
      </Button>,
    );

    expect(container.querySelector('.rcx-icon')).not.toBeInTheDocument();
    expect(container.textContent).toBe('Docs');
  });
});
