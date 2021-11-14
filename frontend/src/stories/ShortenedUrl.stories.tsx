import { Meta, Story } from "@storybook/react";
import ShortenedUrl from "../pages/UrlShortener/ShortenedUrl";

export default {
  title: "ShortenedUrl",
  component: ShortenedUrl,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const shortened: Story = (args) => {
  return <ShortenedUrl {...args} />;
};
shortened.args = {
  link: "http://localhost:3000/T8uzG",
};
