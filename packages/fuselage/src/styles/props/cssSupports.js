import mem from 'mem';

export const cssSupports = mem((value) => typeof window !== 'undefined' && window.CSS && window.CSS.supports(value));
