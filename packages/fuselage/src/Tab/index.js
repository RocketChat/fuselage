/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as styles from './styles';


export function Tab({
  active,
  ...props
}) {
  return (
    <div
      css={[
        styles.base,
        active && styles.active,
      ]}
      {...props}
    />
  );
}
