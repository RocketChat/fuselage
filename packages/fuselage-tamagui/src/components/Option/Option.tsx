import type { ReactNode, MouseEvent } from 'react';
import { forwardRef, memo } from 'react';
import type { YStackProps } from 'tamagui';
import { YStack, Text, XStack } from 'tamagui';

import { Icon } from '../Icon';

type OptionProps = YStackProps & {
  id?: string;
  children?: ReactNode;
  label?: ReactNode;
  focus?: boolean;
  selected?: boolean;
  icon?: string;
  gap?: boolean;
  avatar?: ReactNode;
  title?: string;
  disabled?: boolean;
  value?: string;
  variant?: 'danger' | 'success' | 'warning' | 'primary';
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  description?: ReactNode;
};

export const Option = memo(
  forwardRef<any, OptionProps>(
    (
      {
        id,
        children,
        label,
        focus,
        selected,
        icon,
        gap,
        avatar,
        title,
        disabled,
        variant,
        onClick,
        description,
        ...props
      },
      ref
    ) => (
      <YStack
        ref={ref}
        id={id}
        aria-selected={!!selected}
        aria-disabled={!!disabled}
        title={title}
        onPress={(e: any) => {
          if (disabled) {
            e.preventDefault();
            return;
          }
          onClick?.(e);
        }}
        padding='$2'
        backgroundColor={focus ? '$backgroundFocus' : '$background'}
        opacity={disabled ? 0.5 : 1}
        {...props}
      >
        <XStack alignItems={description ? 'flex-start' : 'center'} space='$2'>
          {avatar}
          {icon && <Icon name={icon} size={20} />}
          {gap && <YStack width={20} />}
          {label && <Text>{label}</Text>}
          {label !== children && children}
        </XStack>
      </YStack>
    )
  )
);

export const OptionHeader = (props: { children: ReactNode }) => (
  <Text padding='$2' fontWeight='bold' color='$color'>
    {props.children}
  </Text>
);

export const OptionDivider = () => <YStack height={1} backgroundColor='$borderColor' />;
