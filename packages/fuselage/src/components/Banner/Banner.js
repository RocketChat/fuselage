import { useResizeObserver } from '@rocket.chat/fuselage-hooks';
import React, { useMemo } from 'react';

import { composeClassNames as cx } from '../../helpers/composeClassNames';
import { useStyleSheet } from '../../hooks/useStyleSheet';
import Button from '../Button';
import { Icon } from '../Icon';
import styleSheet from './Banner.styles.scss';

const variants = ['neutral', 'info', 'success', 'warning', 'danger'];

const Banner = ({
  inline = false,
  children,
  className,
  closeable,
  icon,
  title,
  variant = 'neutral',
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

  return (
    <div
      className={cx('rcx-banner')({ [variant]: true, inline }, className)}
      ref={ref}
      {...props}
    >
      {icon && isIconVisible && (
        <div className={cx('rcx-banner__icon')({ inline })}>{icon}</div>
      )}
      <div className={cx('rcx-banner__content')({ inline })}>
        {closeable && (
          <div className={cx('rcx-banner__close-button')({ inline })}>
            <Button
              ghostish
              square
              small
              {...closeButtonProps}
              onClick={onClose}
            >
              <Icon name='cross' size={24} />
            </Button>
          </div>
        )}
        {title && (
          <h6 className={cx('rcx-banner__title')({ inline })}>{title}</h6>
        )}
        {children}
      </div>
    </div>
  );
};

export default Banner;
