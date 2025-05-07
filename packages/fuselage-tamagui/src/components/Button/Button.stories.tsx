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
  <Button borderRadius="$sm" >
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
      <Button borderRadius="$sm" >
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
    <YStack space="$0">
      <XStack space="$5">
        <Button  borderRadius="$sm" >Primary</Button>
        <Button  borderRadius="$sm">Secondary</Button>
      </XStack>

      <XStack space="$5">
        <Button  borderRadius="$sm">Danger</Button>
        <Button  borderRadius="$sm">Secondary Danger</Button>
      </XStack>

      <XStack space="$4">
        <Button  borderRadius="$sm">Warning</Button>
        <Button  borderRadius="$sm">Secondary Warning</Button>
      </XStack>
      
      <XStack space="$5">
        <Button  borderRadius="$sm">Success</Button>
        <Button  borderRadius="$sm">
        Secondary Success
        </Button>
      </XStack>
      
    </YStack>
  )
};



export const Sizes: StoryFn<typeof Button> = () => {
  return <>
    <XStack space='$3' alignItems='center'>
      <Button borderRadius="$sm" size='$sm'>Small</Button>
      <Button borderRadius="$sm" size='$md'>Medium</Button>
      <Button borderRadius="$sm">Default</Button>
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
    <YStack space="$4">
      <XStack space="$5">
        <Button borderRadius="$1" onPress={() => {}} className="hover">
          Hover
        </Button>
        <Button borderRadius="$1" onPress={() => {}} className="active">
          Active
        </Button>
      </XStack>

      <XStack space="$5">
        <Button borderRadius="$1" onPress={() => {}} className="focus">
          Focus
        </Button>
        <Button borderRadius="$1" onPress={() => {}} className="focus-visible">
          Focus Visible
        </Button>
      </XStack>

      <XStack space="$5">
        <Button borderRadius="$1" disabled>
          Disabled
        </Button>
      </XStack>

      {/* Button Variations (Primary, Secondary, etc.) */}
      <XStack space="$5">
        <Button borderRadius="$1" primary>
          Primary
        </Button>
        <Button borderRadius="$1" secondary>
          Secondary
        </Button>
      </XStack>

      <XStack space="$5">
        <Button borderRadius="$1" danger>
          Danger
        </Button>
        <Button borderRadius="$1" secondaryDanger>
          Secondary Danger
        </Button>
      </XStack>

      <XStack space="$5">
        <Button borderRadius="$1" warning>
          Warning
        </Button>
        <Button borderRadius="$1" secondaryWarning>
          Secondary Warning
        </Button>
      </XStack>

      <XStack space="$5">
        <Button borderRadius="$1" success>
          Success
        </Button>
        <Button borderRadius="$1" secondarySuccess>
          Secondary Success
        </Button>
      </XStack>

      {/* Small Button Variations */}
      <XStack space="$5">
        <Button borderRadius="$1" size="sm" onPress={() => {}} className="hover">
          Hover
        </Button>
        <Button borderRadius="$1" size="sm" onPress={() => {}} className="active">
          Active
        </Button>
      </XStack>

      <XStack space="$5">
        <Button borderRadius="$1" size="sm" onPress={() => {}} className="focus">
          Focus
        </Button>
        <Button borderRadius="$1" size="sm" onPress={() => {}} className="focus-visible">
          Focus Visible
        </Button>
      </XStack>

      <XStack space="$5">
        <Button borderRadius="$1" size="sm" disabled>
          Disabled
        </Button>
      </XStack>

      <XStack space="$5">
        <Button borderRadius="$1" size="sm" primary>
          Primary
        </Button>
        <Button borderRadius="$1" size="sm" secondary>
          Secondary
        </Button>
      </XStack>
    </YStack>
  );
};

export const AsIconButton: StoryFn<typeof Button> = () => {
  return (
    <Button Icon='rocket'>
      Button
    </Button>
)
};