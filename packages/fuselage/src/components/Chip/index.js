import { useStyleSheet } from '@rocket.chat/fuselage-box';
import PropTypes from 'prop-types';
import React from 'react';

import { Avatar, Box } from '..';
import { prependClassName } from '../../helpers/prependClassName';
import globalStyleSheet from '../../index.scss';
import { useStylingProps } from '../Box/stylingProps';
import { Icon } from '../Icon';
import Margins from '../Margins';

const defaultRenderThumb = ({ url }) => (
  <Box rcx-avatar>
    <Avatar size='x20' url={url} />
  </Box>
);
const defaultRenderDismissSymbol = () => <Icon name='cross' size='x16' />;

const Chip = ({
  children,
  thumbUrl,
  onClick,
  onMouseDown,
  renderThumb = defaultRenderThumb,
  renderDismissSymbol = defaultRenderDismissSymbol,
  ...props
}) => {
  useStyleSheet(globalStyleSheet);
  const { className, ...rest } = useStylingProps(props);

  const onDismiss = onClick || onMouseDown;

  return (
    <button
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
    </button>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Chip.displayName = 'Chip';

  Chip.propTypes = {
    thumbUrl: PropTypes.string,
    renderThumb: PropTypes.func,
    renderDismissSymbol: PropTypes.func,
  };
}

export default Chip;
