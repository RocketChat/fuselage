import PropTypes from 'prop-types';
import React, { ComponentProps, FC } from 'react';

import { appendClassName } from '../../helpers/appendClassName';
import { patchChildren } from '../../helpers/patchChildren';
import { Box } from '../Box';

type ButtonGroupProps = ComponentProps<typeof Box> & {
  align?: 'start' | 'center' | 'end';
  stretch?: boolean;
  wrap?: boolean;
  vertical?: boolean;
  small?: boolean;
  medium?: boolean;
};

export const ButtonGroup: FC<ButtonGroupProps> = ({
  align,
  children,
  stretch,
  vertical,
  wrap,
  small,
  medium,
  ...props
}) => (
  <Box
    rcx-button-group
    rcx-button-group--align={align}
    rcx-button-group--stretch={stretch}
    rcx-button-group--vertical={vertical}
    rcx-button-group--small={small}
    rcx-button-group--medium={medium}
    rcx-button-group--wrap={wrap}
    role='group'
    {...props}
  >
    {patchChildren(
      children,
      (childProps: { className: string | string[] }) => ({
        className: appendClassName(
          childProps.className,
          'rcx-button-group__item'
        ),
      })
    )}
  </Box>
);

ButtonGroup.defaultProps = {
  align: 'start',
};

ButtonGroup.propTypes = {
  /** The alignment that should be applied to the items */
  align: PropTypes.oneOf(['start', 'center', 'end']),
  /** Will be the items stretched to fill space? */
  stretch: PropTypes.bool,
  /** Is the items vertically placed? */
  vertical: PropTypes.bool,
  /** Will wrap the items when they exceed the container space? */
  wrap: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
};
