import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { ButtonBase } from '.';

export const ButtonVariant = forwardRef(function ButtonPrimary({
  small,
  medium,
  large,
  square,
  variant = 'secondary',
  ...props
}, ref) {
  console.log('small', small);
  return <ButtonBase
    mod-large={large || (!small && !medium)}
    mod-small={small}
    mod-medium={medium}
    mod-square={square}
    mod-small-square={small && square}
    mod-medium-square={medium && square}
    mod-variant={variant}
    ref={ref}
    {...props}
  />;
});

ButtonVariant.propTypes = {
  variant: PropTypes.oneOf([
    'primary', 'secondary', 'danger', 'primary-danger',
    'ghost', 'ghost-danger', 'ghost-primary',
    'nude-danger', 'nude-primary',
  ]),
};


// export const ButtonPrimary = forwardRef(function ButtonPrimary({ ...props }, ref) {
//   return <Button2 ref={ref} {...props} mod-primary/>;
// });

// export const ButtonPrimaryDanger = forwardRef(function ButtonPrimaryDanger({ ...props }, ref) {
//   return <Button2 ref={ref} {...props} mod-primary-danger/>;
// });

// export const ButtonDanger = forwardRef(function ButtonDanger({ ...props }, ref) {
//   return <Button2 ref={ref} {...props} mod-danger/>;
// });

// export const ButtonGhost = forwardRef(function ButtonGhost({ ...props }, ref) {
//   return <Button2 ref={ref} {...props} mod-ghost/>;
// });

// export const ButtonGhostDanger = forwardRef(function ButtonGhostDanger({ ...props }, ref) {
//   return <Button2 ref={ref} {...props} mod-ghost-danger/>;
// });

// export const ButtonGhostPrimary = forwardRef(function ButtonGhostDanger({ ...props }, ref) {
//   return <Button2 ref={ref} {...props} mod-ghost-primary/>;
// });

// export const ButtonNudeDanger = forwardRef(function ButtonNudeDanger({ ...props }, ref) {
//   return <Button2 ref={ref} {...props} mod-nude-danger/>;
// });

// export const ButtonNudePrimary = forwardRef(function ButtonNudePrimary({ ...props }, ref) {
//   return <Button2 ref={ref} {...props} mod-nude-primary/>;
// });
