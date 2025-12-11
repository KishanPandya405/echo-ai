import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Slider } from "../app/components/ui/Slider";

const meta: Meta<typeof Slider> = {
  title: "Core/Slider",
  component: Slider,
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Temperature: Story = {
  render: () => {
    const [value, setValue] = useState(0.7);
    return (
      <div className="max-w-sm p-4">
        <Slider
          label="Temperature"
          min={0}
          max={1}
          step={0.01}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};
