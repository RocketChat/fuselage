import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

import { prependClassName } from '../../helpers/prependClassName';
import { Avatar } from '../Avatar';
import { Box } from '../Box';
import { withBoxStyling } from '../Box/withBoxStyling';
import { IconButton } from '../Button';
import { Icon } from '../Icon';
import { Margins } from '../Margins';

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
  /** Accessible label for the dismiss `IconButton`. Defaults to `'Dismiss'`. */
  dismissLabel?: string;
};

const defaultRenderThumb = ({ url }: { url: string }) => (
  <Box rcx-avatar>
    <Avatar size='x20' url={url} />
  </Box>
);
const defaultRenderDismissSymbol = () => <Icon name='cross' size='x16' />;

/**
 * Used to communicate and manage input-field selections.
 *
 * **Deprecated behavior:** triggering dismiss via the whole chip's
 * `onClick`/`onMouseDown` is deprecated — use `onDismiss` instead, which
 * renders a dedicated, accessible dismiss `IconButton`.
 */
const Chip = ({
  children,
  className,
  thumbUrl,
  onClick,
  onMouseDown,
  onDismiss,
  dismissLabel = 'Dismiss',
  renderThumb = defaultRenderThumb,
  renderDismissSymbol = defaultRenderDismissSymbol,
  ...rest
}: ChipProps) => {
  if (onDismiss) {
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
          `rcx-box rcx-chip rcx-chip--dismissible${
            isDisabled ? ' rcx-chip--disabled' : ''
          }`,
        )}
        onClick={onClick as unknown as MouseEventHandler<HTMLSpanElement>}
        onMouseDown={
          onMouseDown as unknown as MouseEventHandler<HTMLSpanElement>
        }
        {...(spanRest as unknown as Record<string, unknown>)}
      >
        <Margins all='x4'>
          {thumbUrl && renderThumb && renderThumb({ url: thumbUrl })}
          {children && (
            <span className='rcx-box rcx-chip__text'>{children}</span>
          )}
          <IconButton
            icon='cross'
            mini
            aria-label={dismissLabel}
            disabled={isDisabled}
            onClick={onDismiss}
            onMouseDown={(event) => event.preventDefault()}
          />
        </Margins>
      </span>
    );
  }

  const legacyOnDismiss = onClick || onMouseDown;

  return (
    <button
      type='button'
      className={prependClassName(className, 'rcx-box rcx-chip')}
      disabled={!legacyOnDismiss}
      onClick={legacyOnDismiss}
      {...rest}
    >
      <Margins all='x4'>
        {thumbUrl && renderThumb && renderThumb({ url: thumbUrl })}
        {children && <span className='rcx-box rcx-chip__text'>{children}</span>}
        {legacyOnDismiss && renderDismissSymbol && renderDismissSymbol()}
      </Margins>
    </button>
  );
};

export default withBoxStyling(Chip);
