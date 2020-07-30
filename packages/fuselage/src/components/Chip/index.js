import PropTypes from 'prop-types';
import React from 'react';

import { prependClassName } from '../../helpers/prependClassName';
import { Avatar } from '../Avatar';
import { withBoxStyling } from '../Box/withBoxStyling';
import { Icon } from '../Icon';
import Margins from '../Margins';

const defaultRenderThumb = ({ url }) => <Avatar size='x20' url={url} />;
const defaultRenderDismissSymbol = () => <Icon name='cross' size='x16' />;

const Chip = ({
  children,
  className,
  thumbUrl,
  onClick,
  onMouseDown,
  renderThumb = defaultRenderThumb,
  renderDismissSymbol = defaultRenderDismissSymbol,
  ...rest
}) => {
  const onDismiss = onClick || onMouseDown;

  return <button
    type='button'
    className={prependClassName(className, 'rcx-box rcx-chip')}
    disabled={!onDismiss}
    onClick={onDismiss}
    {...rest}
  >
    <Margins all='x4'>
      {thumbUrl && renderThumb && renderThumb({ url: thumbUrl })}
      {children && <span className='rcx-box rcx-chip__text'>{children}</span>}
      {onDismiss && renderDismissSymbol && renderDismissSymbol()}
    </Margins>
  </button>;
};

if (process.env.NODE_ENV !== 'production') {
  Chip.displayName = 'Chip';

  Chip.propTypes = {
    thumbUrl: PropTypes.string,
    renderThumb: PropTypes.func,
    renderDismissSymbol: PropTypes.func,
  };
}

export default withBoxStyling(Chip);
