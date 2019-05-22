/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import {
  base,
  primary,
} from './styles';

export function Button({
  ...props
}) {
  return (
    <button
      css={css`
        ${ base };
      `}
      {...props}
    />
  );
}
