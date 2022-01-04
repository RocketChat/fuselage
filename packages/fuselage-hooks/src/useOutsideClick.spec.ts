import { renderHook } from '@testing-library/react-hooks';

import { useOutsideClick } from './useOutsideClick';

function simulateMouseClick(targetNode) {
  function triggerMouseEvent(targetNode, eventType) {
    const clickEvent = document.createEvent('MouseEvents');
    clickEvent.initEvent(eventType, true, true);
    targetNode.dispatchEvent(clickEvent);
  }
  ['mouseover', 'mousedown', 'mouseup', 'click'].forEach((eventType) => {
    triggerMouseEvent(targetNode, eventType);
  });
}

it('it should call the callback when the user clicked outside the element', () => {
  const ref = { current: null };
  const cb = jest.fn();
  renderHook(() => useOutsideClick([ref], cb));
  const element = document.createElement('div');
  ref.current = element;
  const sibling = document.createElement('div');

  document.body.appendChild(element);
  document.body.appendChild(sibling);

  expect(cb).not.toHaveBeenCalled();
  simulateMouseClick(sibling);
  expect(cb).toHaveBeenCalled();
});

it('it should call the callback when the user clicked outside the elements', () => {
  const ref = { current: null };
  const ref2 = { current: null };
  const cb = jest.fn();
  renderHook(() => useOutsideClick([ref, ref2], cb));
  const element = document.createElement('div');
  const element2 = document.createElement('div');
  ref.current = element;
  ref2.current = element2;
  const sibling = document.createElement('div');

  document.body.appendChild(element);
  document.body.appendChild(element2);
  document.body.appendChild(sibling);

  expect(cb).not.toHaveBeenCalled();
  simulateMouseClick(sibling);
  expect(cb).toHaveBeenCalled();
});

it('it should not call the callback when the user clicked inside the element', () => {
  const ref = { current: null };
  const cb = jest.fn();
  renderHook(() => useOutsideClick([ref], cb));
  const element = document.createElement('div');
  ref.current = element;

  document.body.appendChild(element);

  expect(cb).not.toHaveBeenCalled();
  simulateMouseClick(element);
  expect(cb).not.toHaveBeenCalled();
});

it('it should not call the callback when the user clicked inside the elements', () => {
  const ref = { current: null };
  const ref2 = { current: null };
  const cb = jest.fn();
  renderHook(() => useOutsideClick([ref, ref2], cb));
  const element = document.createElement('div');
  const element2 = document.createElement('div');
  ref.current = element;
  ref2.current = element2;

  document.body.appendChild(element);
  document.body.appendChild(element2);

  expect(cb).not.toHaveBeenCalled();
  simulateMouseClick(element);
  expect(cb).not.toHaveBeenCalled();
});

it('it should not call the callback when the user clicked inside the element and their children', () => {
  const ref = { current: null };
  const cb = jest.fn();
  renderHook(() => useOutsideClick([ref], cb));
  const element = document.createElement('div');
  const child = document.createElement('div');
  ref.current = element;
  element.appendChild(child);

  document.body.appendChild(element);

  expect(cb).not.toHaveBeenCalled();
  simulateMouseClick(child);
  expect(cb).not.toHaveBeenCalled();
});

it('it should not call the callback when the user clicked inside of some given element and their children', () => {
  const ref = { current: null };
  const ref2 = { current: null };
  const cb = jest.fn();
  renderHook(() => useOutsideClick([ref, ref2], cb));
  const element = document.createElement('div');
  const element2 = document.createElement('div');
  const child = document.createElement('div');
  ref.current = element;
  ref2.current = element2;
  element.appendChild(child);

  document.body.appendChild(element);
  document.body.appendChild(element2);

  expect(cb).not.toHaveBeenCalled();
  simulateMouseClick(child);
  expect(cb).not.toHaveBeenCalled();
});
