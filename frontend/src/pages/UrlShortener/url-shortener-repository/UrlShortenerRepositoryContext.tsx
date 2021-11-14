import { createContext } from "react";
import { UrlShortenerPostInDto } from "../dto/url-shortener-post-in.dto";
import { UrlShortenerRepository } from "./url-shortener-repository.interface";

class DefautlUrlShortenerRepository implements UrlShortenerRepository {
  shorten(link: string): Promise<UrlShortenerPostInDto> {
    throw new Error("Method not implemented.");
  }
}

const UrlShortenerRepositoryContext = createContext<UrlShortenerRepository>(
  new DefautlUrlShortenerRepository()
);

export default UrlShortenerRepositoryContext;
