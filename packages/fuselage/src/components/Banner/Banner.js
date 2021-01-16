import React, { useMemo } from 'react';

import { composeClassNames as cx } from '../../helpers/composeClassNames';
import { useStyleSheet } from '../../hooks/useStyleSheet';
import Button from '../Button';
import { Icon } from '../Icon';

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

  variant = variants.includes(variant) ? variant : variants[0];

  const closeButtonProps = useMemo(() => {
    return variant !== variants[0] ? { [variant]: true } : {};
  }, [variant]);

  return (
    <div
      className={cx('rcx-banner')({ [variant]: true }, className)}
      {...props}
    >
      {icon && <div className={cx('rcx-banner__icon')({ inline })}>{icon}</div>}
      <div className={cx('rcx-banner__content')({ inline })}>
        {title && (
          <h6 className={cx('rcx-banner__title')({ inline })}>{title}</h6>
        )}
        {children}
      </div>
      {closeable && (
        <div className={cx('rcx-banner__close-button')({ inline })}>
          <Button ghostish square small {...closeButtonProps} onClick={onClose}>
            <Icon name='cross' size={24} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Banner;
