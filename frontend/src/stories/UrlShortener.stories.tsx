import { Meta, Story } from "@storybook/react";
import UrlShortener from "../pages/UrlShortener";
import { InMemUrlShortenerRepository } from "../pages/UrlShortener/url-shortener-repository/in-mem-url-shortener-repository";
import UrlShortenerRepositoryContext from "../pages/UrlShortener/url-shortener-repository/UrlShortenerRepositoryContext";

export default {
  title: "UrlShortener",
  parameters: {
    layout: "centered",
  },
  decorators: [
    (CurrentStory) => {
      const urlShortenerRepository = new InMemUrlShortenerRepository();
      return (
        <UrlShortenerRepositoryContext.Provider value={urlShortenerRepository}>
          <CurrentStory />
        </UrlShortenerRepositoryContext.Provider>
      );
    },
  ],
} as Meta;

export const index: Story = () => {
  return <UrlShortener />;
};
