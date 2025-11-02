import { render } from '@testing-library/react';
import { it, vi } from 'vitest';

import RedirectPage from './RedirectPage.js';

const onRedirect = vi.fn();

it('renders without crashing', () => {
  render(
    <RedirectPage title='Ready' countDownSeconds={5} onRedirect={onRedirect} />,
  );
});
