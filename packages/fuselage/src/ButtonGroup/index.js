/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as styles from './styles';


export function ButtonGroup({
  wrap,
  stretch,
  vertical,
  className,
  ...props
}) {
  return (
    <div
      css={[
        styles.base,
        wrap && styles.wrap,
        stretch && styles.stretch,
        vertical && styles.vertical,
      ]}
      {...props}
    />
  );
}
