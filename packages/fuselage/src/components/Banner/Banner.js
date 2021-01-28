import { useResizeObserver } from '@rocket.chat/fuselage-hooks';
import React, { useCallback, useMemo } from 'react';

import { composeClassNames as cx } from '../../helpers/composeClassNames';
import { useStyleSheet } from '../../hooks/useStyleSheet';
import { Box, Scrollable } from '../Box';
import Button from '../Button';
import { Icon } from '../Icon';
import styleSheet from './Banner.styles.scss';

const variants = ['neutral', 'info', 'success', 'warning', 'danger'];

const Banner = ({
  inline = false,
  children,
  className,
  actionable,
  closeable,
  icon,
  title,
  variant = 'neutral',
  onAction,
  onClose,
  ...props
}) => {
  useStyleSheet();
  useStyleSheet(styleSheet);

  const { ref, borderBoxSize } = useResizeObserver();

  const isIconVisible = useMemo(() => {
    return borderBoxSize.inlineSize > 375;
  }, [borderBoxSize.inlineSize]);

  variant = variants.includes(variant) ? variant : variants[0];

  const closeButtonProps = useMemo(() => {
    return variant !== variants[0] ? { [variant]: true } : {};
  }, [variant]);

  const handleBannerClick = useCallback(() => {
    if (onAction) {
      onAction();
    }
  }, [onAction]);

  const handleCloseButtonClick = useCallback(
    (event) => {
      event.stopPropagation();

      if (onClose) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <section
      className={cx('rcx-banner')(
        { [variant]: true, inline, actionable },
        className
      )}
      ref={ref}
      role='banner'
      onClick={handleBannerClick}
      {...props}
    >
      {icon && isIconVisible && (
        <div className={cx('rcx-banner__icon')({ inline })}>{icon}</div>
      )}
      <Scrollable horizontal>
        <Box className={cx('rcx-banner__wrapper')()}>
          <div className={cx('rcx-banner__content')({ inline })}>
            {title && (
              <h6 className={cx('rcx-banner__title')({ inline })}>{title}</h6>
            )}
            {children}
          </div>
        </Box>
      </Scrollable>
      {closeable && (
        <div className={cx('rcx-banner__close-button')({ inline })}>
          <Button
            ghostish
            square
            small
            {...closeButtonProps}
            onClick={handleCloseButtonClick}
          >
            <Icon name='cross' size={24} />
          </Button>
        </div>
      )}
    </section>
  );
};

export default Banner;
