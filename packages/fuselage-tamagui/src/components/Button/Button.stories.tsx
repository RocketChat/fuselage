import type { Meta, StoryFn } from "@storybook/react"
import {Button} from "./Button"
import { Spinner, XStack, YStack, Anchor, Text, Stack } from 'tamagui'
import { useState } from "react"

const ButtonState = ({ 
  variant, 
  state, 
  size = 'medium',
  withIcon
}: { 
  variant?: 'primary' | 'secondary' | 'danger' | 'secondary-danger' | 'warning' | 'secondary-warning' | 'success' | 'secondary-success';
  state?: 'default' | 'hover' | 'active' | 'focus' | 'disabled';
  size?: 'tiny' | 'mini' | 'small' | 'medium' | 'large';
  withIcon?: boolean;
}) => {
  const getStateProps = () => {
    const baseProps = {
      disabled: state === 'disabled',
    };

    return baseProps;
  };

  const getVariantProps = () => {
    switch(variant) {
      case 'primary':
        return { primary: true };
      case 'secondary':
        return { secondary: true };
      case 'danger':
        return { danger: true };
      case 'secondary-danger':
        return { secondary: true, danger: true };
      case 'warning':
        return { warning: true };
      case 'secondary-warning':
        return { secondary: true, warning: true };
      case 'success':
        return { success: true };
      case 'secondary-success':
        return { secondary: true, success: true };
      default:
        return {};
    }
  };

  return (
    <Button
      size={size}
      icon={withIcon ? 'balloon-text' : undefined}
      {...getStateProps()}
      {...getVariantProps()}
    >
      Button
    </Button>
  );
};

const meta: Meta<typeof Button> = {
  title: "INPUTS/Button",
  component: Button,
  parameters:{
    layout:"centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryFn<typeof Button> = () => {
  return (
      <Button>Button</Button>
    )
};

export const Loading: StoryFn<typeof Button> = () => {
  return (
  <Button loading>
    <XStack alignItems="center" space="$2">
      <Spinner size="small" color="#6C727A" />
      <Text>Button</Text>
    </XStack>
  </Button>);
};

export const LoadingInteraction: StoryFn<typeof Button> = () => {
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    // after 2 seconds, set loading to false
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  
  return (
    <Button onPress={handlePress} loading={loading}>
      {loading ? (
        <XStack alignItems="center" space="$2">
          <Spinner size="small" color="#6C727A" />
          <Text>Button</Text>
        </XStack>
      ) : (
        "Button"
      )}
    </Button>
  );
};

export const Variants: StoryFn<typeof Button> = () => {
  return (
    <YStack>
      <XStack style={{ marginBottom: 24 }}>
        <Button primary style={{ marginRight: 16 }}>Primary</Button>
        <Button secondary>Secondary</Button>
      </XStack>

      <XStack style={{ marginBottom: 24 }}>
        <Button danger style={{ marginRight: 16 }}>Danger</Button>
        <Button secondary danger>Secondary Danger</Button>
      </XStack>

      <XStack style={{ marginBottom: 24 }}>
        <Button warning style={{ marginRight: 16 }}>Warning</Button>
        <Button secondary warning>Secondary Warning</Button>
      </XStack>
      
      <XStack style={{ marginBottom: 24 }}>
        <Button success style={{ marginRight: 16 }}>Success</Button>
        <Button secondary success>
        Secondary Success
        </Button>
      </XStack>
      
    </YStack>
  )
};

export const Sizes: StoryFn<typeof Button> = () => {
  return (
    <XStack alignItems='center'>
      <Button size='small' style={{ marginRight: 16 }}>Small</Button>
      <Button size='medium' style={{ marginRight: 16 }}>Medium</Button>
      <Button size='large'>Default</Button>
    </XStack>
  )
};

export const AsLink: StoryFn<typeof Button> = () => {
  return (
    <Button secondary asLink href="https://open.rocket.chat" target="_blank">
      Button
    </Button>
  )
};

export const AsIconButton: StoryFn<typeof Button> = () => {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      width: '100%',
      height: '100px'
    }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F2329" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
    </div>
  )
};

export const States: StoryFn<typeof Button> = () => {
  return (
    <Stack padding="$4">
      <Text fontSize="$6" marginBottom="$4">Button States</Text>
      
      <YStack backgroundColor="$surface" padding="$4" borderRadius="$2">
        {/* Header */}
        <XStack>
          <Stack width={250}></Stack>
          <XStack flex={1} justifyContent="space-around" paddingHorizontal="$4">
            <Text color="$text" fontSize="$3">default</Text>
            <Text color="$text" fontSize="$3">hover</Text>
            <Text color="$text" fontSize="$3">active</Text>
            <Text color="$text" fontSize="$3">focus</Text>
            <Text color="$text" fontSize="$3">disabled</Text>
          </XStack>
        </XStack>

        {/* Button Rows */}
        <YStack style={{ marginTop: 16 }}>
          {[
            { label: 'icon + text', withIcon: true },
            { label: 'text' },
            { label: 'primary', variant: 'primary' },
            { label: 'secondary', variant: 'secondary' },
            { label: 'danger', variant: 'danger' },
            { label: 'secondary-danger', variant: 'secondary-danger' },
            { label: 'warning', variant: 'warning' },
            { label: 'secondary-warning', variant: 'secondary-warning' },
            { label: 'success', variant: 'success' },
            { label: 'secondary-success', variant: 'secondary-success' },
          ].map(({ label, variant, withIcon }, index) => (
            <XStack key={label} style={{ marginBottom: index < 9 ? 24 : 0 }}>
              <Stack width={250} justifyContent="center">
                <Text color="$text" fontSize="$3" textAlign="right">{label}</Text>
              </Stack>
              <XStack flex={1} justifyContent="space-around" paddingHorizontal="$4">
                <Stack style={{ marginRight: 16 }}>
                  <ButtonState variant={variant as any} state="default" withIcon={withIcon} />
                </Stack>
                <Stack style={{ marginRight: 16 }}>
                  <ButtonState variant={variant as any} state="hover" withIcon={withIcon} />
                </Stack>
                <Stack style={{ marginRight: 16 }}>
                  <ButtonState variant={variant as any} state="active" withIcon={withIcon} />
                </Stack>
                <Stack style={{ marginRight: 16 }}>
                  <ButtonState variant={variant as any} state="focus" withIcon={withIcon} />
                </Stack>
                <Stack>
                  <ButtonState variant={variant as any} state="disabled" withIcon={withIcon} />
                </Stack>
              </XStack>
            </XStack>
          ))}
        </YStack>

        {/* Small Size Buttons */}
        <YStack style={{ marginTop: 32 }}>
          {[
            { label: 'icon + text', withIcon: true },
            { label: 'text' },
            { label: 'primary', variant: 'primary' },
            { label: 'secondary', variant: 'secondary' },
            { label: 'danger', variant: 'danger' },
            { label: 'secondary-danger', variant: 'secondary-danger' },
            { label: 'warning', variant: 'warning' },
            { label: 'secondary-warning', variant: 'secondary-warning' },
            { label: 'success', variant: 'success' },
            { label: 'secondary-success', variant: 'secondary-success' },
          ].map(({ label, variant, withIcon }, index) => (
            <XStack key={label + '-small'} style={{ marginBottom: index < 9 ? 24 : 0 }}>
              <Stack width={250} justifyContent="center">
                <Text color="$text" fontSize="$3" textAlign="right">{label}</Text>
              </Stack>
              <XStack flex={1} justifyContent="space-around" paddingHorizontal="$4">
                <Stack style={{ marginRight: 16 }}>
                  <ButtonState variant={variant as any} state="default" size="small" withIcon={withIcon} />
                </Stack>
                <Stack style={{ marginRight: 16 }}>
                  <ButtonState variant={variant as any} state="hover" size="small" withIcon={withIcon} />
                </Stack>
                <Stack style={{ marginRight: 16 }}>
                  <ButtonState variant={variant as any} state="active" size="small" withIcon={withIcon} />
                </Stack>
                <Stack style={{ marginRight: 16 }}>
                  <ButtonState variant={variant as any} state="focus" size="small" withIcon={withIcon} />
                </Stack>
                <Stack>
                  <ButtonState variant={variant as any} state="disabled" size="small" withIcon={withIcon} />
                </Stack>
              </XStack>
            </XStack>
          ))}
        </YStack>
      </YStack>
    </Stack>
  );
};