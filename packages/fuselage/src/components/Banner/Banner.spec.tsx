import { render, screen } from '@testing-library/react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import Banner from './Banner';

withResizeObserverMock();

describe('[Banner Component]', () => {
  it('renders without crashing', () => {
    render(<Banner />, { legacyRoot: true });
  });

  it('renders with link', () => {
    render(<Banner link='https://rocket.chat' linkText='More info' />, {
      legacyRoot: true,
    });
    expect(
      screen.getByRole('link', {
        name: /more info/i,
      })
    ).toBeInTheDocument();
  });
});
