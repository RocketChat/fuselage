export const getStyle = (style) => {
  switch (style) {
    case 'primary':
    case 'danger':
      return {
        [style]: true,
      };
  }
};
