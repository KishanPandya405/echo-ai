import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Modal } from "../app/components/ui/Modal";
import { Button } from "../app/components/ui/Button";

const meta: Meta<typeof Modal> = {
  title: "Core/Modal",
  component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <div className="p-4">
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal open={open} title="Settings" onClose={() => setOpen(false)}>
          <p>This is a simple modal for the AI playground.</p>
        </Modal>
      </div>
    );
  },
};
