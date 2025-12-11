// src/stories/ModelSelector.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ModelSelector } from "@/app/components/ModelSelector";
import { SessionProvider } from "@/app/context/SessionContext";

const meta: Meta<typeof ModelSelector> = {
  title: "Core/ModelSelector",
  component: ModelSelector,
  decorators: [
    (Story) => (
      <SessionProvider>
        <Story />
      </SessionProvider>
    ),
  ],
};
export default meta;

export const Default: StoryObj<typeof ModelSelector> = {};
