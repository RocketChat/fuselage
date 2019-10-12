const breakpoints = {
  xs: {
    minViewportWidth: 320,
    columns: 4,
    gutterWidth: 16,
  },
  sm: {
    minViewportWidth: 600,
    columns: 8,
    gutterWidth: 16,
  },
  md: {
    minViewportWidth: 768,
    columns: 8,
    gutterWidth: 24,
  },
  lg: {
    minViewportWidth: 1024,
    columns: 12,
    gutterWidth: 24,
  },
  xl: {
    minViewportWidth: 1440,
    columns: 12,
    gutterWidth: 24,
  },
};

export default breakpoints;

export const smallestBreakpoint = Object.keys(breakpoints)[0];
export const responsiveBreakpoints = Object.keys(breakpoints).slice(0);
