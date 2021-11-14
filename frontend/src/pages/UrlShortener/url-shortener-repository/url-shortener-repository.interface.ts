import { UrlShortenerPostInDto } from "../dto/url-shortener-post-in.dto";

export interface UrlShortenerRepository {
	shorten(link: string): Promise<UrlShortenerPostInDto>;
}
