import hash from '@emotion/hash';

/**
 * Creates a pair of selector and escaped selector for a CSS Modules content.
 *
 * @returns a pair of selectors in the format `rcx-@<content hash>`; the second element is escaped
 * for use in CSS content
 */
export const createSelector = (content: string): [string, string] => {
  const contentHash = hash(content);
  return [`rcx-@${ contentHash }`, `rcx-\\@${ contentHash }`];
};
