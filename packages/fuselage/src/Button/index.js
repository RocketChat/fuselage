/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as styles from './styles';


export function Button({
  invisible,
  primary,
  secondary,
  outline,
  nude,
  cancel,
  small,
  square,
  stack,
  noPadding,
  loading,
  full,
  ...props
}) {
  return (
    <button
      css={[
        styles.base,
        invisible && styles.invisible,
        primary && styles.primary,
        secondary && styles.secondary,
        outline && styles.outline,
        nude && styles.nude,
        cancel && styles.cancel,
        small && styles.small,
        square && styles.square,
        stack && styles.stack,
        noPadding && styles.noPadding,
        primary && outline && styles.primaryAndOutline,
        primary && nude && styles.primaryAndNude,
        secondary && outline && styles.secondaryAndOutline,
        cancel && outline && styles.cancelAndOutline,
        loading && styles.loading,
        full && styles.full,
      ]}
      {...props}
    />
  );
}
