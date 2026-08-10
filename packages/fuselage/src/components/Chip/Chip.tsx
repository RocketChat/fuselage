import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

import { prependClassName } from '../../helpers/prependClassName';
import { Avatar } from '../Avatar';
import { Box } from '../Box';
import type { StylingProps } from '../Box/stylingProps';
import { withBoxStyling } from '../Box/withBoxStyling';
import { IconButton } from '../Button';
import type { IconProps } from '../Icon';
import { Icon } from '../Icon';
import { Margins } from '../Margins';

type ChipSize = 'medium' | 'small';

export type ChipProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type'
> & {
  thumbUrl?: string;
  renderThumb?: (props: { url: string }) => ReactNode;
  /**
   * @deprecated Custom renderer for the legacy whole-chip dismiss icon.
   * Ignored when `onDismiss` is provided. Use `onDismiss` instead, which
   * renders a dedicated, accessible dismiss `IconButton`.
   */
  renderDismissSymbol?: () => ReactNode;
  /**
   * Called when the dismiss `IconButton` is activated. When provided, the
   * chip renders a non-interactive root with a real, accessible `IconButton`
   * as the dismiss trigger, instead of relying on the whole chip's
   * `onClick`/`onMouseDown` (deprecated).
   */
  onDismiss?: MouseEventHandler<HTMLButtonElement>;
  /**
   * Icon of the trailing `IconButton`. Defaults to `'cross'` (dismiss), but
   * can render other affordances (e.g. `'chevron-down'` for a chip that opens
   * a menu). Only applies when `onDismiss` is provided.
   */
  icon?: IconProps['name'];
  /**
   * Accessible label and tooltip (`title`) for the trailing `IconButton`.
   * Defaults to `'Dismiss'`.
   */
  dismissLabel?: string;
  /**
   * Size of the dismissible chip: `medium` renders a 28px dismiss
   * `IconButton`, `small` a 20px one. Only applies when `onDismiss` is
   * provided. Defaults to `'medium'`.
   */
  size?: 'medium' | 'small';
};

// `size` collides with the Box styling prop of the same name, which
// `withBoxStyling` would consume before it reaches this component, so the
// exported wrapper below renames it to `chipSize` internally.
type InnerChipProps = Omit<ChipProps, 'size'> & { chipSize?: ChipSize };

const defaultRenderThumb = ({ url }: { url: string }) => (
  <Box rcx-avatar>
    <Avatar size='x20' url={url} />
  </Box>
);
const smallRenderThumb = ({ url }: { url: string }) => (
  <Box rcx-avatar>
    <Avatar size='x16' url={url} />
  </Box>
);
const defaultRenderDismissSymbol = () => <Icon name='cross' size='x16' />;

const InnerChip = ({
  children,
  className,
  thumbUrl,
  onClick,
  onMouseDown,
  onDismiss,
  icon = 'cross',
  dismissLabel = 'Dismiss',
  chipSize: size = 'medium',
  renderThumb,
  renderDismissSymbol = defaultRenderDismissSymbol,
  ...rest
}: InnerChipProps) => {
  if (onDismiss) {
    const renderDismissibleThumb =
      renderThumb ?? (size === 'small' ? smallRenderThumb : defaultRenderThumb);
    // `disabled` is a button-only HTML attribute; strip it from the spread
    // so it isn't rendered as an invalid attribute on the `<span>` root.
    const { disabled, ...spanRest } = rest;
    const isDisabled = Boolean(disabled);

    return (
      // The root is a non-interactive container; the only interactive
      // element is the dismiss `IconButton` below, which is natively
      // keyboard-operable. `onClick`/`onMouseDown` here are optional
      // legacy passthrough handlers, not the primary interaction.
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <span
        className={prependClassName(
          className,
          `rcx-box rcx-chip rcx-chip--dismissible rcx-chip--${size}${
            isDisabled ? ' rcx-chip--disabled' : ''
          }`,
        )}
        onClick={onClick as unknown as MouseEventHandler<HTMLSpanElement>}
        onMouseDown={
          onMouseDown as unknown as MouseEventHandler<HTMLSpanElement>
        }
        {...(spanRest as unknown as Record<string, unknown>)}
      >
        {thumbUrl && renderDismissibleThumb({ url: thumbUrl })}
        {children && <span className='rcx-box rcx-chip__text'>{children}</span>}
        <IconButton
          icon={icon}
          small={size === 'medium'}
          mini={size === 'small'}
          aria-label={dismissLabel}
          title={dismissLabel}
          disabled={isDisabled}
          onClick={onDismiss}
          onMouseDown={(event) => event.preventDefault()}
        />
      </span>
    );
  }

  const legacyOnDismiss = onClick || onMouseDown;
  const legacyRenderThumb = renderThumb ?? defaultRenderThumb;

  return (
    <button
      type='button'
      className={prependClassName(className, 'rcx-box rcx-chip')}
      disabled={!legacyOnDismiss}
      onClick={legacyOnDismiss}
      {...rest}
    >
      <Margins all='x4'>
        {thumbUrl && legacyRenderThumb({ url: thumbUrl })}
        {children && <span className='rcx-box rcx-chip__text'>{children}</span>}
        {legacyOnDismiss && renderDismissSymbol && renderDismissSymbol()}
      </Margins>
    </button>
  );
};

const BoxedChip = withBoxStyling(InnerChip);

/**
 * Used to communicate and manage input-field selections.
 *
 * **Deprecated behavior:** triggering dismiss via the whole chip's
 * `onClick`/`onMouseDown` is deprecated — use `onDismiss` instead, which
 * renders a dedicated, accessible dismiss `IconButton`.
 */
const Chip = ({
  size,
  ...props
}: ChipProps & Omit<Partial<StylingProps>, 'size'>) => (
  <BoxedChip chipSize={size} {...props} />
);

export default Chip;
