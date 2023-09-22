import { renderHook } from '@testing-library/react-hooks';

import { useDocumentTitle } from './useDocumentTitle';

const DEFAULT_TITLE = 'Default Title';
const EXAMPLE_TITLE = 'Example Title';
const CUSTOM_DEFAULT_TITLE = 'Custom Default Title';

beforeEach(() => {
  document.title = DEFAULT_TITLE;
});

it('should change the document title to the new value with default title', () => {
  renderHook(() => useDocumentTitle(EXAMPLE_TITLE));

  expect(document.title).toBe(`${EXAMPLE_TITLE} - ${DEFAULT_TITLE}`);
});

it('should change the document title to the new value without default title', () => {
  renderHook(() =>
    useDocumentTitle(EXAMPLE_TITLE, { keepDefaultTitle: false })
  );

  expect(document.title).toBe(EXAMPLE_TITLE);
});

it('should change the document title to the new value without default title even with custom default title', () => {
  renderHook(() =>
    useDocumentTitle(EXAMPLE_TITLE, {
      keepDefaultTitle: false,
      customDefaultTitle: CUSTOM_DEFAULT_TITLE,
    })
  );

  expect(document.title).toBe(EXAMPLE_TITLE);
});

it('should change the document title to the new value with custom default title', () => {
  renderHook(() =>
    useDocumentTitle(EXAMPLE_TITLE, {
      customDefaultTitle: CUSTOM_DEFAULT_TITLE,
    })
  );

  expect(document.title).toBe(`${EXAMPLE_TITLE} - ${CUSTOM_DEFAULT_TITLE}`);
});

it('should return an array with document title value and a function to change it', () => {
  const { result } = renderHook(() => useDocumentTitle(EXAMPLE_TITLE));

  expect(result.current[0]).toBe(`${EXAMPLE_TITLE} - ${DEFAULT_TITLE}`);
  expect(result.current[1]).toBeInstanceOf(Function);
});
