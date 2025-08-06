import type { ImageProps } from 'tamagui';
import { Image, YStack } from 'tamagui';

export type AvatarProps = ImageProps & {
  size?: number;
  rounded?: boolean;
  url: string;
};

export const Avatar = ({
  size = 36,
  rounded = false,
  url,
  ...props
}: AvatarProps) => (
  <YStack
    width={size}
    height={size}
    borderRadius={rounded ? 9999 : 4}
    overflow='hidden'
  >
    <Image source={{ uri: url, width: size, height: size }} {...props} />
  </YStack>
);

Avatar.displayName = 'Avatar';
