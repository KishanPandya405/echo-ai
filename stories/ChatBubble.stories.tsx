import type { Meta, StoryObj } from "@storybook/react";
import { ChatBubble } from "../app/components/ui/ChatBubble";

const meta: Meta<typeof ChatBubble> = {
  title: "Core/ChatBubble",
  component: ChatBubble,
  args: {
    content: "Hello! This is a sample message.",
  },
};
export default meta;

type Story = StoryObj<typeof ChatBubble>;

export const User: Story = {
  args: {
    role: "user",
  },
};

export const Assistant: Story = {
  args: {
    role: "assistant",
  },
};
