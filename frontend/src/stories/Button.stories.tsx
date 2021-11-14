import { Meta, Story } from "@storybook/react";

import Button from "../components/Buttons";

export default {
  title: "Components/Button",
  parameters: {
    layout: "centered",
  },
  component: Button,
} as Meta;

export const button: Story = () => {
  return <Button>Click</Button>;
};
