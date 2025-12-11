import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../app/components/ui/Button";

const meta: Meta<typeof Button> = {
  title: "Core/Button",
  component: Button,
  args: {
    children: "Click me",
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    disabled: true,
  },
};
