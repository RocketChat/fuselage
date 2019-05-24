/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import * as styles from './styles';


export const ButtonGroup = styled(function ButtonGroup({
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
      className={['rcx-button-group', className].filter(Boolean).join(' ')}
    />
  );
})();
