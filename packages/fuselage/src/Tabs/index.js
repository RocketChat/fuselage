/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as styles from './styles';


export function Tabs({
  children,
  ...props
}) {
  return (
    <div
      css={[
        styles.base,
      ]}
      {...props}
    >
      <div
        css={[
          styles.wrapper,
        ]}
      >
        {children}
      </div>
    </div>
  );
}
