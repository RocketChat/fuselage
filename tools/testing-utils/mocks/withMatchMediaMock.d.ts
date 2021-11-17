export declare const withMatchMediaMock: () => (viewport: {
  'type'?: 'screen' | 'print';
  'width'?: number;
  'prefers-color-scheme'?: 'light' | 'dark' | 'no-preference';
  'prefers-reduced-data'?: 'reduce' | 'no-preference';
  'prefers-reduced-motion'?: 'reduce' | 'no-preference';
}) => void;
