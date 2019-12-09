import PropTypes from 'prop-types';
import React from 'react';

import { useProps } from '../../hooks';
import { createStyledComponent } from '../../styles';

const Base = createStyledComponent('rcx-button-group');
function BaseChildren({ children }) {
  const [, PropsProvider] = useProps(({ className }) => ({
    className: [className, 'rcx-button-group__item'].filter(Boolean).join(' '),
  }));

  return <PropsProvider children={children} />;
}

export const ButtonGroup = React.forwardRef(function ButtonGroup({
  align,
  children,
  stretch,
  vertical,
  wrap,
  ...props
}, ref) {
  return <Base
    mod-align={align}
    mod-stretch={stretch}
    mod-vertical={vertical}
    mod-wrap={wrap}
    ref={ref}
    role='group'
    {...props}
  >
    <BaseChildren>
      {children}
    </BaseChildren>
  </Base>;
});

ButtonGroup.defaultProps = {
  align: 'start',
};

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.propTypes = {
  /** The alignment that should be applied to the items */
  align: PropTypes.oneOf(['start', 'center', 'end']),
  /** Is this component visible? */
  invisible: PropTypes.bool,
  /** Will be the items stretched to fill space? */
  stretch: PropTypes.bool,
  /** Is the items vertically placed? */
  vertical: PropTypes.bool,
  /** Will wrap the items when they exceed the container space? */
  wrap: PropTypes.bool,
};
