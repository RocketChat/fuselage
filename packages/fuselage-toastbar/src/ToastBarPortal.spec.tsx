import { cleanup, render, screen } from '@testing-library/react';
import { StrictMode, Suspense } from 'react';

import ToastBarPortal from './ToastBarPortal';

afterEach(() => {
  cleanup();
  document.getElementById('toastBarRoot')?.remove();
});

const pending = new Promise<void>(() => undefined);
const Suspended = () => {
  throw pending;
};

it('does not create a portal root for an uncommitted suspended render', () => {
  render(
    <Suspense fallback={<span>Loading</span>}>
      <ToastBarPortal>Toast</ToastBarPortal>
      <Suspended />
    </Suspense>,
  );

  expect(screen.getByText('Loading')).toBeInTheDocument();
  expect(document.getElementById('toastBarRoot')).toBeNull();
});

it('renders and updates portal children, then cleans up on unmount', () => {
  const { rerender, unmount } = render(<ToastBarPortal>First</ToastBarPortal>);
  const root = document.getElementById('toastBarRoot');
  expect(root).toHaveTextContent('First');

  rerender(<ToastBarPortal>Updated</ToastBarPortal>);
  expect(document.getElementById('toastBarRoot')).toBe(root);
  expect(root).toHaveTextContent('Updated');
  unmount();
  expect(document.getElementById('toastBarRoot')).toBeNull();
});

it('keeps a shared root until the final portal unmounts', () => {
  const first = render(<ToastBarPortal>First</ToastBarPortal>);
  const second = render(<ToastBarPortal>Second</ToastBarPortal>);
  const root = document.getElementById('toastBarRoot');
  expect(root).toHaveTextContent('FirstSecond');

  first.unmount();
  expect(document.getElementById('toastBarRoot')).toBe(root);
  expect(root).toHaveTextContent('Second');
  second.unmount();
  expect(document.getElementById('toastBarRoot')).toBeNull();
});

it('balances root references under StrictMode', () => {
  const { unmount } = render(
    <StrictMode>
      <ToastBarPortal>Toast</ToastBarPortal>
    </StrictMode>,
  );

  expect(screen.getByText('Toast')).toBeInTheDocument();
  expect(document.querySelectorAll('#toastBarRoot')).toHaveLength(1);
  expect(document.getElementById('toastBarRoot')?.dataset['refCount']).toBe(
    '1',
  );
  unmount();
  expect(document.getElementById('toastBarRoot')).toBeNull();
});
