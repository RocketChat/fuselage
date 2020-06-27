import hash from '@emotion/hash';

export const createAnimationName = (suggestedAnimationName: string | undefined, content: string): string =>
  suggestedAnimationName || (content ? `rcx-@${ hash(content) }` : 'none');

export const createClassName = (suggestedClassName: string | undefined, content: string): string =>
  suggestedClassName || `rcx-@${ hash(content) }`;

export const escapeName = (animationOrClassName: string): string =>
  animationOrClassName.replace(/@|#|:/g, (char) => `\\${ char }`);
