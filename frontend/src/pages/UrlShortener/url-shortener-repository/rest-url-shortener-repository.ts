import axios from "axios";
import urljoin from "url-join";

import { UrlShortenerPostInDto } from "../dto/url-shortener-post-in.dto";
import { UrlShortenerRepository } from "./url-shortener-repository.interface";

const API_URL = process.env.API_URL || 'http://localhost:5000';

export class RestUrlShortenerRepository implements UrlShortenerRepository {
	API_ENDPOINT = 'shortThis';

	async shorten(link: string): Promise<UrlShortenerPostInDto> {
		const { data } = await axios.post(urljoin(API_URL, this.API_ENDPOINT), {
			url: link,
		});

		return data;
	}
}