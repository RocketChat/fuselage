import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';

import { useOutsideClick } from './useOutsideClick';

it('it should call the callback when the user clicked outside the element', () => {
  const ref = { current: document.createElement('div') };
  const cb = jest.fn();
  renderHook(() => useOutsideClick([ref], cb));

  const sibling = document.createElement('div');

  document.body.appendChild(ref.current);
  document.body.appendChild(sibling);

  expect(cb).not.toHaveBeenCalled();
  userEvent.click(sibling);
  expect(cb).toHaveBeenCalled();
});

it('it should call the callback when the user clicked outside the elements', () => {
  const ref = { current: document.createElement('div') };
  const ref2 = { current: null };
  const cb = jest.fn();
  renderHook(() => useOutsideClick([ref, ref2], cb));

  const element2 = document.createElement('div');
  ref2.current = element2;
  const sibling = document.createElement('div');

  document.body.appendChild(ref.current);
  document.body.appendChild(element2);
  document.body.appendChild(sibling);

  expect(cb).not.toHaveBeenCalled();
  userEvent.click(sibling);
  expect(cb).toHaveBeenCalled();
});

it('it should not call the callback when the user clicked inside the element', () => {
  const ref = { current: document.createElement('div') };
  const cb = jest.fn();
  renderHook(() => useOutsideClick([ref], cb));

  document.body.appendChild(ref.current);

  expect(cb).not.toHaveBeenCalled();
  userEvent.click(ref.current);
  expect(cb).not.toHaveBeenCalled();
});

it('it should not call the callback when the user clicked inside the elements', () => {
  const ref = { current: document.createElement('div') };
  const ref2 = { current: null };
  const cb = jest.fn();
  renderHook(() => useOutsideClick([ref, ref2], cb));
  const element2 = document.createElement('div');
  ref2.current = element2;

  document.body.appendChild(ref.current);
  document.body.appendChild(element2);

  expect(cb).not.toHaveBeenCalled();
  userEvent.click(ref.current);
  expect(cb).not.toHaveBeenCalled();
});

it('it should not call the callback when the user clicked inside the element and their children', () => {
  const ref = { current: document.createElement('div') };
  const cb = jest.fn();
  renderHook(() => useOutsideClick([ref], cb));
  const child = document.createElement('div');

  ref.current.appendChild(child);

  document.body.appendChild(ref.current);

  expect(cb).not.toHaveBeenCalled();
  userEvent.click(child);
  expect(cb).not.toHaveBeenCalled();
});

it('it should not call the callback when the user clicked inside of some given element and their children', () => {
  const ref = { current: document.createElement('div') };
  const ref2 = { current: null };
  const cb = jest.fn();
  renderHook(() => useOutsideClick([ref, ref2], cb));
  const element2 = document.createElement('div');
  const child = document.createElement('div');
  ref2.current = element2;
  ref.current.appendChild(child);

  document.body.appendChild(ref.current);
  document.body.appendChild(element2);

  expect(cb).not.toHaveBeenCalled();
  userEvent.click(child);
  expect(cb).not.toHaveBeenCalled();
});
