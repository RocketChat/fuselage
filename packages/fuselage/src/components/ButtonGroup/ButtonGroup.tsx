import type { HTMLAttributes, RefAttributes } from 'react';

export type ButtonGroupProps = RefAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> & {
    align?: 'start' | 'center' | 'end';
    stretch?: boolean;
    wrap?: boolean;
    vertical?: boolean;
    small?: boolean;
    large?: boolean;
  } & (
    | {
        /**
         * Fuses the buttons into a single segmented control. Takes precedence
         * over `small`/`large` spacing.
         */
        joined: true;
        /**
         * Renders the first (`start`) or last (`end`) segment of the joined
         * group as a transparent "ghost" segment, letting the group's
         * translucent background show through.
         */
        ghostPosition?: 'start' | 'end';
      }
    | {
        joined?: false;
        ghostPosition?: never;
      }
  );

/**
 * A container for grouping buttons that semantically share a common action context.
 */
function ButtonGroup({
  align = 'start',
  children,
  stretch,
  vertical,
  wrap,
  small,
  large,
  joined,
  ghostPosition,
  className,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      className={[
        'rcx-button-group',
        stretch && 'rcx-button-group--stretch',
        vertical && 'rcx-button-group--vertical',
        align && `rcx-button-group--align-${align}`,
        !joined && small && 'rcx-button-group--small',
        !joined && large && 'rcx-button-group--large',
        wrap && 'rcx-button-group--wrap',
        joined && 'rcx-button-group--joined',
        joined && ghostPosition && `rcx-button-group--ghost-${ghostPosition}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role='group'
      {...props}
    >
      {children}
    </div>
  );
}

export default ButtonGroup;
