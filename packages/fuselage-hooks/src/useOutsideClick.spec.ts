import userEvent from '@testing-library/user-event';
import type { RefObject } from 'react';

import { renderHook } from './testing';
import { useOutsideClick } from './useOutsideClick';

describe('elements inside an open shadow root', () => {
  let host: HTMLDivElement;
  let element: HTMLDivElement;
  let child: HTMLButtonElement;
  let sibling: HTMLButtonElement;

  beforeEach(() => {
    host = document.createElement('div');
    const shadowRoot = host.attachShadow({ mode: 'open' });
    element = document.createElement('div');
    child = document.createElement('button');
    sibling = document.createElement('button');
    element.append(child);
    shadowRoot.append(element, sibling);
    document.body.append(host);
  });

  afterEach(() => host.remove());

  it('does not treat a click on a shadow descendant as an outside click', () => {
    const cb = jest.fn();
    renderHook(() => useOutsideClick([{ current: element }], cb));

    child.dispatchEvent(
      new MouseEvent('mousedown', { bubbles: true, composed: true }),
    );

    expect(cb).not.toHaveBeenCalled();
  });

  it('still detects outside clicks within and outside the shadow root', () => {
    const cb = jest.fn();
    renderHook(() => useOutsideClick([{ current: element }], cb));

    sibling.dispatchEvent(
      new MouseEvent('mousedown', { bubbles: true, composed: true }),
    );
    expect(cb).toHaveBeenCalledTimes(1);

    document.body.dispatchEvent(
      new MouseEvent('mousedown', { bubbles: true, composed: true }),
    );
    expect(cb).toHaveBeenCalledTimes(2);
  });
});

it('it should call the callback when the user clicked outside the element', async () => {
  const ref: RefObject<HTMLElement> = {
    current: document.createElement('div'),
  };
  const cb = jest.fn();
  renderHook(() => useOutsideClick([ref], cb));

  const sibling = document.createElement('div');

  document.body.appendChild(ref.current);
  document.body.appendChild(sibling);

  expect(cb).not.toHaveBeenCalled();
  await userEvent.click(sibling);
  expect(cb).toHaveBeenCalled();
});

it('it should call the callback when the user clicked outside the elements', async () => {
  const ref: RefObject<HTMLElement> = {
    current: document.createElement('div'),
  };
  const ref2: RefObject<HTMLElement | null> = { current: null };
  const cb = jest.fn();
  renderHook(() => useOutsideClick([ref, ref2], cb));

  const element2 = document.createElement('div');
  ref2.current = element2;
  const sibling = document.createElement('div');

  document.body.appendChild(ref.current);
  document.body.appendChild(element2);
  document.body.appendChild(sibling);

  expect(cb).not.toHaveBeenCalled();
  await userEvent.click(sibling);
  expect(cb).toHaveBeenCalled();
});

it('it should not call the callback when the user clicked inside the element', async () => {
  const ref: RefObject<HTMLElement> = {
    current: document.createElement('div'),
  };
  const cb = jest.fn();
  renderHook(() => useOutsideClick([ref], cb));

  document.body.appendChild(ref.current);

  expect(cb).not.toHaveBeenCalled();
  await userEvent.click(ref.current);
  expect(cb).not.toHaveBeenCalled();
});

it('it should not call the callback when the user clicked inside the elements', async () => {
  const ref: RefObject<HTMLElement> = {
    current: document.createElement('div'),
  };
  const ref2: RefObject<HTMLElement | null> = { current: null };
  const cb = jest.fn();
  renderHook(() => useOutsideClick([ref, ref2], cb));
  const element2 = document.createElement('div');
  ref2.current = element2;

  document.body.appendChild(ref.current);
  document.body.appendChild(element2);

  expect(cb).not.toHaveBeenCalled();
  await userEvent.click(ref.current);
  expect(cb).not.toHaveBeenCalled();
});

it('it should not call the callback when the user clicked inside the element and their children', async () => {
  const ref: RefObject<HTMLElement> = {
    current: document.createElement('div'),
  };
  const cb = jest.fn();
  renderHook(() => useOutsideClick([ref], cb));
  const child = document.createElement('div');

  ref.current.appendChild(child);

  document.body.appendChild(ref.current);

  expect(cb).not.toHaveBeenCalled();
  await userEvent.click(child);
  expect(cb).not.toHaveBeenCalled();
});

it('it should not call the callback when the user clicked inside of some given element and their children', async () => {
  const ref: RefObject<HTMLElement> = {
    current: document.createElement('div'),
  };
  const ref2: RefObject<HTMLElement | null> = { current: null };
  const cb = jest.fn();
  renderHook(() => useOutsideClick([ref, ref2], cb));
  const element2 = document.createElement('div');
  const child = document.createElement('div');
  ref2.current = element2;
  ref.current.appendChild(child);

  document.body.appendChild(ref.current);
  document.body.appendChild(element2);

  expect(cb).not.toHaveBeenCalled();
  await userEvent.click(child);
  expect(cb).not.toHaveBeenCalled();
});
