import { forwardRef, isValidElement, useMemo } from "react";
import { Button, View, styled } from "tamagui";
import { Icon } from "../Icon";

type IconButtonProps = Omit<React.ComponentProps<typeof Button>, 'size'> & {
  icon: React.ReactNode | string;
  size?: "large" | "medium" | "small" | "tiny" | "mini";
  primary?: boolean;
  secondary?: boolean;
  info?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  pressed?: boolean;
  position?: 'relative' | 'absolute' | 'fixed';
  overflow?: 'visible' | 'hidden';
};

const iconSizeMap = {
  large: 28,
  medium: 24,
  small: 20,
  tiny: 16,
  mini: 12,
};

const ButtonWrapper = styled(View, {
  position: "relative",
  variants: {
    overflow: {
      visible: { overflow: 'visible' },
      hidden: { overflow: 'hidden' }
    }
  }
});

export const IconButton = forwardRef<any, IconButtonProps>(
  ({ 
    icon, 
    size = "large", 
    children, 
    primary,
    secondary,
    info,
    success,
    warning,
    danger,
    pressed,
    position,
    overflow,
    ...props 
  }, ref) => {
    const iconSize = iconSizeMap[size] || iconSizeMap.large;
    
    // Determine button variant based on props (matching original fuselage logic)
    const variant = useMemo(
      () =>
        (secondary && danger && 'secondary-danger') ||
        (secondary && warning && 'secondary-warning') ||
        (secondary && success && 'secondary-success') ||
        (secondary && info && 'secondary-info') ||
        (info && 'info') ||
        (success && 'success') ||
        (warning && 'warning') ||
        (danger && 'danger') ||
        (primary && 'secondary-info') ||
        (secondary && 'secondary') ||
        'default',
      [danger, info, primary, secondary, success, warning],
    );

    return (
      <ButtonWrapper position={position} overflow={overflow}>
        <Button
          ref={ref}
          borderRadius={1000}
          width={iconSize + 16}
          height={iconSize + 16}
          padding={0}
          backgroundColor={pressed ? '$colors-n400' : undefined}
          {...props}
          theme={variant}
        >
          {isValidElement(icon) ? (
            icon
          ) : (
            <Icon name={icon as string} size={iconSize} />
          )}
          {children}
        </Button>
      </ButtonWrapper>
    );
  }
);

IconButton.displayName = "IconButton";