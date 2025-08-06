import type { ReactNode } from 'react';
import type { ButtonProps } from 'tamagui';
import { Button, Image, Text, XStack } from 'tamagui';

import { Icon } from '../Icon';

type ChipProps = ButtonProps & {
  thumbUrl?: string;
  renderThumb?: (props: { url: string }) => ReactNode;
  renderDismissSymbol?: () => ReactNode;
};

const defaultRenderThumb = ({ url }: { url: string }) => (
  <Image source={{ uri: url, width: 20, height: 20 }} borderRadius={9999} />
);

const defaultRenderDismissSymbol = () => <Icon name='cross' size={16} />;

export const Chip = ({
  children,
  thumbUrl,
  onPress,
  renderThumb = defaultRenderThumb,
  renderDismissSymbol = defaultRenderDismissSymbol,
  ...rest
}: ChipProps) => {
  const onDismiss = onPress;

  return (
    <Button
      onPress={onDismiss}
      disabled={!onDismiss}
      padding={4}
      borderRadius={4}
      backgroundColor='$backgroundFocus'
      {...rest}
    >
      <XStack space='$1' alignItems='center'>
        {thumbUrl && renderThumb && renderThumb({ url: thumbUrl })}
        {children && <Text>{children}</Text>}
        {onDismiss && renderDismissSymbol && renderDismissSymbol()}
      </XStack>
    </Button>
  );
};

Chip.displayName = 'Chip';
