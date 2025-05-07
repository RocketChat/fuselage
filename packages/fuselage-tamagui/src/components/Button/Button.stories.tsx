import type { Meta, StoryFn } from "@storybook/react"
import {Button} from "./Button"
import { Spinner , XStack, YStack, Anchor} from 'tamagui'
import { useState } from "react"
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
      <Button borderRadius='$sm'>Button</Button>
    )
};

export const Loading: StoryFn<typeof Button> = () => {
  return (
  <Button disabled borderRadius="$sm" >
  <Spinner color="#6C727A"></Spinner>
  Button
  </Button>);
};



export const LoadingInteraction: StoryFn<typeof Button> = () => {
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    // after 2 seconds, set loading to false
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
  };
  if(loading){
    return (
      <Button disabled borderRadius="$sm" >
        <Spinner color="#6C727A"></Spinner>
        Button
      </Button>
    )
  }
  return (
    <Button onPress={handlePress} borderRadius="$sm">
      Button
    </Button>
  );
};

export const Variants: StoryFn<typeof Button> = () => {
  return (
    <YStack space="$sm">
      <XStack space="$sm">
        <Button  Primary borderRadius="$sm" >Primary</Button>
        <Button  Secondary borderRadius="$sm">Secondary</Button>
      </XStack>

      <XStack space="$sm">
        <Button  Danger borderRadius="$sm">Danger</Button>
        <Button  Secondary Danger borderRadius="$sm">Secondary Danger</Button>
      </XStack>

      <XStack space="$sm">
        <Button  Warning borderRadius="$sm">Warning</Button>
        <Button  Secondary Warning borderRadius="$sm">Secondary Warning</Button>
      </XStack>
      
      <XStack space="$sm">
        <Button  Success borderRadius="$sm">Success</Button>
        <Button  Secondary Success borderRadius="$sm">
        Secondary Success
        </Button>
      </XStack>
      
    </YStack>
  )
};



export const Sizes: StoryFn<typeof Button> = () => {
  return <>
    <XStack space='$sm' alignItems='center'>
      <Button borderRadius="$sm" size='$sm'>Small</Button>
      <Button borderRadius="$sm" size='$md'>Medium</Button>
      <Button borderRadius="$sm" >Default</Button>
    </XStack>
  </>
};

export const AsLink: StoryFn<typeof Button> = () => {
  return (
      <Anchor href="https://open.rocket.chat" target="_blank" textDecorationLine="none">
        <Button borderRadius='$sm'>
          Button
        </Button>
      </Anchor>
)
};


export const States: StoryFn<typeof Button> = () => {
  return (
    <YStack space="$sm">
      <XStack space="$sm">
        <Button borderRadius="$sm" onPress={() => {}} className="hover">
          Hover
        </Button>
        <Button borderRadius="$sm" onPress={() => {}} className="active">
          Active
        </Button>
      </XStack>

      <XStack space="$sm">
        <Button borderRadius="$sm" onPress={() => {}} className="focus">
          Focus
        </Button>
        <Button borderRadius="$sm" onPress={() => {}} className="focus-visible">
          Focus Visible
        </Button>
      </XStack>

      <XStack space="$md">
        <Button borderRadius="$sm" disabled>
          Disabled
        </Button>
      </XStack>

      {/* Button Variations (Primary, Secondary, etc.) */}
      <XStack space="$md">
        <Button borderRadius="$sm" primary>
          Primary
        </Button>
        <Button borderRadius="$sm" secondary>
          Secondary
        </Button>
      </XStack>

      <XStack space="$md">
        <Button borderRadius="$sm" danger>
          Danger
        </Button>
        <Button borderRadius="$sm" secondaryDanger>
          Secondary Danger
        </Button>
      </XStack>

      <XStack space="$md">
        <Button borderRadius="$sm" warning>
          Warning
        </Button>
        <Button borderRadius="$sm" secondaryWarning>
          Secondary Warning
        </Button>
      </XStack>

      <XStack space="$md">
        <Button borderRadius="$sm" success>
          Success
        </Button>
        <Button borderRadius="$sm" secondarySuccess>
          Secondary Success
        </Button>
      </XStack>

      {/* Small Button Variations */}
      <XStack space="$md">
        <Button borderRadius="$sm" size="$sm" onPress={() => {}} className="hover">
          Hover
        </Button>
        <Button borderRadius="$sm" size="$sm" onPress={() => {}} className="active">
          Active
        </Button>
      </XStack>

      <XStack space="$md">
        <Button borderRadius="$sm" size="$sm" onPress={() => {}} className="focus">
          Focus
        </Button>
        <Button borderRadius="$sm" size="$sm" onPress={() => {}} className="focus-visible">
          Focus Visible
        </Button>
      </XStack>

      <XStack space="$md">
        <Button borderRadius="$sm" size="$sm" disabled>
          Disabled
        </Button>
      </XStack>

      <XStack space="$md">
        <Button borderRadius="$sm" size="$sm" primary>
          Primary
        </Button>
        <Button borderRadius="$sm" size="$sm" secondary>
          Secondary
        </Button>
      </XStack>
    </YStack>
  );
};

export const AsIconButton: StoryFn<typeof Button> = () => {
  return (
    <Button borderRadius="$sm">
      Button
    </Button>
)
};