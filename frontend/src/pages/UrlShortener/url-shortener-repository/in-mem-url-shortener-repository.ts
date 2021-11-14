import { UrlShortenerPostInDto } from "../dto/url-shortener-post-in.dto";
import { generateId } from "../utils/generate-id";
import { UrlShortenerRepository } from "./url-shortener-repository.interface";
import urljoin from 'url-join';

const APP_URL = process.env.APP_URL || 'http://localhost:3000';

export class InMemUrlShortenerRepository implements UrlShortenerRepository {
	urlsRepository = new Map<String, String>();

	async shorten(link: string): Promise<UrlShortenerPostInDto> {
		const id = generateId();

		this.urlsRepository.set(id, link);

		return {
			shortenedUrl: urljoin(APP_URL, id),
		};
	}
}