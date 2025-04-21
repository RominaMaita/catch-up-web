import axios from 'axios';

const newsApiUrl = import.meta.env.VITE_NEWS_API_URL;
const apiKey = import.meta.env.VITE_NEWS_API_KEY;
const sourcesEndpoint = import.meta.env.VITE_SOURCES_ENPOINT_PATH;

const http = axios.create({
    baseURL: newsApiUrl,
    params: {
        apiKey: apiKey,
    }
});

export class NewsApiService {
    getSources() {
        return http.get(`${newsApiUrl}/${sourcesEndpoint}`);
    }
}