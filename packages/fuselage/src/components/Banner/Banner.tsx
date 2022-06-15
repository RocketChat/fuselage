import { useBorderBoxSize } from '@rocket.chat/fuselage-hooks';
import type { ReactNode, AllHTMLAttributes } from 'react';
import React, { useRef, useCallback, useMemo } from 'react';

import { composeClassNames as cx } from '../../helpers/composeClassNames';
import { useStyleSheet } from '../../hooks/useStyleSheet';
import { IconButton } from '../Button';
import styleSheet from './Banner.styles.scss';

type VariantType = 'neutral' | 'info' | 'success' | 'warning' | 'danger';

const variants: VariantType[] = [
  'neutral',
  'info',
  'success',
  'warning',
  'danger',
];

type BannerProps = {
  inline?: boolean;
  actionable?: boolean;
  closeable?: boolean;
  icon?: ReactNode;
  title?: string;
  variant?: VariantType;
  onAction?: () => void;
  onClose?: () => void;
} & AllHTMLAttributes<HTMLElement>;

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
}: BannerProps) => {
  useStyleSheet();
  useStyleSheet(styleSheet);

  const ref = useRef(null);
  const { inlineSize } = useBorderBoxSize(ref, {
    debounceDelay: 70,
  });

  const isIconVisible = useMemo(() => inlineSize > 375, [inlineSize]);

  variant = variants.includes(variant) ? variant : variants[0];
  const closeButtonProps = useMemo(
    () => ({
      info: variant === 'info',
      success: variant === 'success',
      warning: variant === 'warning',
      danger: variant === 'danger',
    }),
    [variant]
  );

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
      <div className={cx('rcx-banner__content')({ inline })}>
        {title && (
          <h6 className={cx('rcx-banner__title')({ inline })}>{title}</h6>
        )}
        {children}
      </div>
      {closeable && (
        <div className={cx('rcx-banner__close-button')({ inline })}>
          <IconButton
            small
            {...closeButtonProps}
            onClick={handleCloseButtonClick}
            icon='cross'
          />
        </div>
      )}
    </section>
  );
};

export default Banner;
