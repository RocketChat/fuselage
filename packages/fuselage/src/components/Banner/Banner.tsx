import {
  useBorderBoxSize,
  useButtonPattern,
} from '@rocket.chat/fuselage-hooks';
import type {
  ReactNode,
  AllHTMLAttributes,
  HTMLAttributeAnchorTarget,
  MouseEvent,
} from 'react';
import { useRef, useCallback, useMemo } from 'react';
import { styled } from 'tamagui';

import { RcxView, RcxText } from '../../primitives';
import { IconButton } from '../Button';

type VariantType = 'neutral' | 'info' | 'success' | 'warning' | 'danger';

const variants: VariantType[] = [
  'neutral',
  'info',
  'success',
  'warning',
  'danger',
];

const BannerFrame = styled(RcxText, {
  name: 'BannerFrame',

  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexShrink: 1,

  paddingBlock: 14,
  paddingInline: 16,

  color: '$fontDefault',
  borderTopWidth: 4,
  borderTopStyle: 'solid',
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  borderBottomColor: '$strokeExtraLight',

  backgroundColor: '$surfaceTint',

  fontFamily: '$body',

  overflowWrap: 'normal',

  variants: {
    variant: {
      neutral: {
        borderTopColor: 'transparent',
      },
      info: {
        borderTopColor: '$statusFontOnInfo',
      },
      success: {
        borderTopColor: '$statusFontOnSuccess',
      },
      warning: {
        borderTopColor: '$statusFontOnWarning',
      },
      danger: {
        borderTopColor: '$statusFontOnDanger',
      },
    },

    inline: {
      true: {
        paddingBlock: 12,
      },
    },

    actionable: {
      true: {
        cursor: 'pointer',
      },
    },
  } as const,

  defaultVariants: {
    variant: 'neutral',
  },
});

const BannerIcon = styled(RcxView, {
  name: 'BannerIcon',

  paddingBlock: 8,
  paddingInlineEnd: 12,

  variants: {
    variant: {
      neutral: {},
      info: {
        color: '$statusFontOnInfo',
      },
      success: {
        color: '$statusFontOnSuccess',
      },
      warning: {
        color: '$statusFontOnWarning',
      },
      danger: {
        color: '$statusFontOnDanger',
      },
    },

    inline: {
      true: {
        marginBlock: -2,
        paddingBlock: 0,
      },
    },
  } as const,
});

const BannerContent = styled(RcxText, {
  name: 'BannerContent',

  flexGrow: 1,
  alignSelf: 'center',

  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  letterSpacing: '$p2',

  color: 'inherit',
  overflowWrap: 'normal',

  variants: {
    inline: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
  } as const,
});

const BannerTitle = styled(RcxText, {
  name: 'BannerTitle',

  margin: 0,
  padding: 0,

  fontFamily: '$body',
  fontSize: '$h5',
  fontWeight: '$h5',
  lineHeight: '$h5',
  letterSpacing: '$h5',

  color: 'inherit',
  overflowWrap: 'normal',

  variants: {
    inline: {
      true: {
        display: 'inline' as any,
        paddingInlineEnd: 8,
      },
    },
  } as const,
});

const BannerCloseButton = styled(RcxView, {
  name: 'BannerCloseButton',

  paddingBlock: 6,
  paddingInline: 8,

  variants: {
    inline: {
      true: {
        marginBlock: -4,
        paddingBlock: 0,
      },
    },
  } as const,
});

const BannerLink = styled(RcxText, {
  name: 'BannerLink',

  tag: 'a',
  paddingLeft: 10,

  color: 'inherit',
  overflowWrap: 'normal',
});

export type BannerProps = {
  actionable?: boolean;
  closeable?: boolean;
  icon?: ReactNode;
  inline?: boolean;
  link?: string;
  linkTarget?: HTMLAttributeAnchorTarget;
  linkText?: string;
  onAction?: () => void;
  onClose?: () => void;
  title?: string;
  variant?: VariantType;
} & AllHTMLAttributes<HTMLElement>;

const Banner = ({
  actionable,
  children,
  className,
  closeable,
  icon,
  inline = false,
  link,
  linkText = 'More info',
  linkTarget = '_blank',
  onAction,
  onClose,
  title,
  variant = 'neutral',
  ...props
}: BannerProps) => {
  const ref = useRef(null);
  const { inlineSize } = useBorderBoxSize(ref, {
    debounceDelay: 70,
  });

  const isIconVisible = useMemo(() => inlineSize > 375, [inlineSize]);

  variant = variants.includes(variant) ? variant : variants[0];

  const handleBannerClick = useCallback(() => {
    if (onAction) {
      onAction();
    }
  }, [onAction]);

  const handleCloseButtonClick = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();

      if (onClose) {
        onClose();
      }
    },
    [onClose],
  );

  const buttonProps = useButtonPattern(handleBannerClick);

  return (
    <BannerFrame
      variant={variant}
      inline={inline || undefined}
      actionable={actionable || undefined}
      ref={ref}
      className={className}
      {...(onAction ? { ...buttonProps } : { role: 'banner', tabIndex: -1 })}
      {...(props as any)}
    >
      {icon && isIconVisible && (
        <BannerIcon variant={variant} inline={inline || undefined}>
          {icon}
        </BannerIcon>
      )}
      <BannerContent inline={inline || undefined}>
        {title && (
          <BannerTitle inline={inline || undefined}>{title}</BannerTitle>
        )}
        {children}
        {link && (
          <BannerLink
            href={link}
            target={linkTarget}
          >
            {linkText}
          </BannerLink>
        )}
      </BannerContent>
      {closeable && (
        <BannerCloseButton inline={inline || undefined}>
          <IconButton small onClick={handleCloseButtonClick} icon='cross' />
        </BannerCloseButton>
      )}
    </BannerFrame>
  );
};

export default Banner;
