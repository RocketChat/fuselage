import { screen } from '@testing-library/react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { render } from '../../testing';

import Banner from './Banner';

withResizeObserverMock();

describe('[Banner Component]', () => {
  it('renders without crashing', () => {
    render(<Banner />);
  });

  it('renders with link', () => {
    render(<Banner link='https://rocket.chat' linkText='More info' />);
    expect(
      screen.getByRole('link', {
        name: /more info/i,
      }),
    ).toBeInTheDocument();
  });
});
