import type { Meta, StoryFn } from "@storybook/react"
import {Button} from "tamagui"

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
  return <Button>Button</Button>
};