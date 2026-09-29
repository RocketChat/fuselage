import type { HTMLAttributes, RefAttributes } from 'react';

export type SplitButtonProps = RefAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> &
  ({ 'aria-label': string } | { 'aria-labelledby': string });

/**
 * Fuses a menu trigger and its primary action into a single control, e.g. an
 * audio device menu next to a microphone toggle. The first child is rendered
 * as a ghost segment and is expected to be the menu trigger.
 */
function SplitButton({ className, ...props }: SplitButtonProps) {
  return (
    <div
      role='group'
      className={['rcx-split-button', className].filter(Boolean).join(' ')}
      {...props}
    />
  );
}

export default SplitButton;
