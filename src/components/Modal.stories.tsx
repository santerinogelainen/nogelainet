import React from "react";
import Modal from "./Modal";
import { SBContentPlaceholder } from "../utils/storybookUtils";

const Template = (args) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <button type="button" onClick={() => setVisible(true)}>
        Show
      </button>
      <Modal visible={visible} {...args}>
        <SBContentPlaceholder size={200} />
        <button type="button" onClick={() => setVisible(false)}>
          Hide
        </button>
      </Modal>
    </div>
  );
};

import { Meta, StoryObj } from "@storybook/react/*";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  render: Template,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {},
};
