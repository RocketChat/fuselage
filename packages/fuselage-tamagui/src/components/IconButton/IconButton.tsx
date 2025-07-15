import { forwardRef, isValidElement } from "react";
import { Button } from "tamagui";
import { Icon } from "../Icon";

type IconButtonProps = React.ComponentProps<typeof Button> & {
  icon: React.ReactNode | string;
  size?: "large" | "medium" | "small" | "tiny" | "mini";
};

const iconSizeMap = {
  large: 28,
  medium: 24,
  small: 20,
  tiny: 16,
  mini: 12,
};

export const IconButton = forwardRef<any, IconButtonProps>(
  ({ icon, size = "large", children, ...props }, ref) => {
    const iconSize = iconSizeMap[size] || iconSizeMap.large;
    return (
      <Button
        ref={ref}
        borderRadius={1000}
        width={iconSize + 16}
        height={iconSize + 16}
        padding={0}
        {...props}
      >
        {isValidElement(icon) ? (
          icon
        ) : (
          <Icon name={icon as string} size={iconSize} />
        )}
        {children}
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";