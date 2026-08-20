import type { HTMLAttributes, RefAttributes } from 'react';

export type ButtonGroupProps = RefAttributes<HTMLDivElement> & {
  align?: 'start' | 'center' | 'end';
  stretch?: boolean;
  wrap?: boolean;
  vertical?: boolean;
  small?: boolean;
  large?: boolean;
  /**
   * Fuses the buttons into a single segmented control. Takes precedence
   * over `small`/`large` spacing.
   */
  joined?: boolean;
} & HTMLAttributes<HTMLDivElement>;

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
