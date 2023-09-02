import points from "../points.json";
import {replace} from "../utils/index";
import {
    Options,
    AccessToken,
    AlbumGetterOptions,
    Album,
    SearchByNameOptions,
    SearchByNameResponse,
    AlbumTrack,
    AlbumTracksGetterOptions,
    ArtistGetterOptions,
    Artist,
    AlbumPages,
    ArtistAlbumsGetterOptions,
    Track,
    ArtistTopTracksGetterOptions,
    ArtistRelatedArtistsGetterOptions,
    available_markets,
    available_genres,
    NewReleasesGetterOptions,
    AudioBookGetterOptions,
    AudioBook,
    ChaptersPages,
    AudioBookChapetersGetterOptions,
    CategoryGetterOptions,
    Category,
    CategoriesGetterOptions,
    CategoryPages,
    Chapter,
    ChapterGetterOptions
} from "../@types";

export class Client {
    public readonly clientId: string;
    public readonly clientSecret: string;
    private _token?: AccessToken;

    constructor(options: Options) {
        this.clientId = options.clientId;
        this.clientSecret = options.clientSecret;
    }

    async getToken(): Promise<AccessToken> {
        const point = points.access_token;

        if (this._token) return this._token;

        let request = await fetch(point.url, {
            method: "POST",
            headers: {
                ...point.headers
            },
            body: replace(point.body, {
                $CLIENT_ID: this.clientId,
                $CLIENT_SECRET: this.clientSecret
            })
        });

        let response = await request.json();

        if (request.status !== 200) throw new Error(`${request.statusText} - ${response.error.message}`);

        return {
            ...response,
            expires_date: Date.now() + (response.expires_in * 1000)
        }
    }

    async refreshToken(): Promise<AccessToken> {
        let token = await this._token;
        
        if (Date.now() >= token.expires_date) this._token = await this.getToken();

        return this._token;
    }
    
    async searchAlbum(options: AlbumGetterOptions): Promise<Album> {
        const token = await this.getToken();
        const point = points.albums;
        let {id, market} = options;

        const httpRequest = replace(point.url, {
            $id: id,
            $market: market ? `?market=${market}` : ""
        });
        
        let request = await fetch(httpRequest, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token.access_token}`
            }
        });

        let response = await request.json();
        if (request.status !== 200) throw new Error(`${request.statusText} - ${response.error.message}`);

        return response;
    }

    async searchAlbumTracks(options: AlbumTracksGetterOptions): Promise<AlbumTrack> {
        const token = await this.getToken();
        const point = points.albums;
        let {id, market, limit, offset} = options;

        const httpRequest = replace(point.tracks, {
            $id: id,
            $market: market ? `market=${market}` : "",
            $limit: limit ?? 20,
            $offset: offset ?? 0
        });

        let request = await fetch(httpRequest, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token.access_token}`
            }
        });

        let response = await request.json();

        if (request.status !== 200) throw new Error(`${request.statusText} - ${response.error.message}`);
        return response;
    }

    async searchNewReleases(options: NewReleasesGetterOptions = {}): Promise<AlbumPages> {
        const token = await this.getToken();
        const point = points.albums;
        let {country, limit, offset} = options;

        let httpRequest = replace(point.new_releases, {
            $limit: limit ?? 20,
            $offset: offset ?? 0,
            $country: country ? `&contry=${country}` : ""
        });

        let request = await fetch(httpRequest, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token.access_token}`
            }
        });

        let response = await request.json();

        if (request.status !== 200) throw new Error(`${request.statusText} - ${response.error.message}`);
        return response.albums;
    }

    async searchArtist(options: ArtistGetterOptions): Promise<Artist> {
        const token = await this.getToken();
        const point = points.artists;

        let httpRequest = replace(point.url, {
            $id: options.id
        });

        let request = await fetch(httpRequest, {
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${token.access_token}`
            }
        });

        let response = await request.json();

        if (request.status !== 200) throw new Error(`${request.statusText} - ${response.error.message}`);
        return response;
    }

    async searchArtistAlbums(options: ArtistAlbumsGetterOptions): Promise<AlbumPages> {
        const token = await this.getToken();
        const point = points.artists;
        let {id, market, include_groups, offset, limit} = options;

        let httpRequest = replace(point.albums, {
            $id: id,
            $market: market ? `&market=${market}` : "",
            $include_groups: include_groups ? `&include_groups=${include_groups.join(',')}` : "",
            $limit: limit ?? 20,
            $offset: offset ?? 0
        });

        let request = await fetch(httpRequest, {
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${token.access_token}`
            }
        });

        let response = await request.json();

        if (request.status !== 200) throw new Error(`${request.statusText} - ${response.error.message}`)
        return response;
    }

    async searchArtistTopTracks(options: ArtistTopTracksGetterOptions): Promise<Array<Track>> {
        const token = await this.getToken();
        const point = points.artists;
        let {id, market} = options;

        let httpRequest = replace(point.top_tracks, {
            $id: id,
            $market: market ? `?market=${market}` : ""
        });

        let request = await fetch(httpRequest, {
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${token.access_token}`
            }
        });

        let response = await request.json();
        
        if (request.status !== 200) throw new Error(`${request.statusText} - ${response.error.message}`)
        return response.tracks;
    }

    async searchArtistRelatedArtists(options: ArtistRelatedArtistsGetterOptions): Promise<Array<Artist>> {
        const token = await this.getToken();
        const point = points.artists;

        let httpRequest = replace(point.related_artists, {
            $id: options.id
        });

        let request = await fetch(httpRequest, {
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${token.access_token}`
            }
        });

        let response = await request.json();

        if (request.status !== 200) throw new Error(`${request.statusText} - ${response.error.message}`);
        return response.artists;
    }

    async searchAudioBook(options: AudioBookGetterOptions): Promise<AudioBook> {
        const token = await this.getToken();
        const point = points.audio_books;
        let {id, market} = options;

        let httpRequest = replace(point.url, {
            $id: id,
            $market: market ? `?market=${market}` : ""
        });

        let request = await fetch(httpRequest, {
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${token.access_token}`
            }
        });

        let response = await request.json();

        if (request.status !== 200) throw new Error(`${request.statusText} - ${response.error.message}`);
        return response;
    }

    async searchAudioBookChapters(options: AudioBookChapetersGetterOptions): Promise<ChaptersPages> {
        const token = await this.getToken();
        const point = points.audio_books;
        let {id, limit, offset, market} = options;
        
        let httpRequest = replace(point.chapters, {
            $id: id,
            $limit: limit ?? 20,
            $offset: offset ?? 0,
            $market: market ? `&market=${market}` : ""
        });

        let request = await fetch(httpRequest, {
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${token.access_token}`
            }
        });

        let response = await request.json();

        if (request.status !== 200) throw new Error(`${request.statusText} - ${response.error.message}`);
        return response;
    }

    async searchCategory(options: CategoryGetterOptions): Promise<Category> {
        const token = await this.getToken();
        const point = points.categories;
        let {category_id, country, locale} = options;
        
        let httpRequest = replace(point.url, {
            $category_id: (country && locale)? `${category_id}?$country&$locale` : country ? `${category_id}?$country` : locale ? `${category_id}?$locale` : category_id,
            $country: country ? `country=${country}` : "",
            $locale: locale ? `locale=${locale}` : ""
        });

        let request = await fetch(httpRequest, {
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${token.access_token}`
            }
        });

        let response = await request.json();

        if (request.status !== 200) throw new Error(`${request.statusText} - ${response.error.message}`);
        return response;
    }

    async searchCategories(options: CategoriesGetterOptions = {}): Promise<CategoryPages> {
        const token = await this.getToken();
        const point = points.categories;
        let {country, locale, limit, offset} = options;

        let httpRequest = replace(point.several, {
            $limit: limit ?? 20,
            $offset: offset ?? 0,
            $country: country ? `&country=${country}` : "",
            $locale: locale ? `&locale=${locale}` : ""
        });

        let request = await fetch(httpRequest, {
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${token.access_token}`
            }
        });

        let response = await request.json();

        if (request.status !== 200) throw new Error(`${request.statusText} - ${response.error.message}`)
        return response.categories;
    }

    async searchChapter(options: ChapterGetterOptions): Promise<Chapter> {
        const token = await this.getToken();
        const point = points.chapters;
        let {id, market} = options;

        const httpRequest = replace(point.url, {
            $id: id,
            $market: market ? `?market=${market}` : ""
        });
        
        let request = await fetch(httpRequest, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token.access_token}`
            }
        });

        let response = await request.json();
        if (request.status !== 200) throw new Error(`${request.statusText} - ${response.error.message}`);

        return response;
    }

    // some functions to manage the response
    async searchByName(options: SearchByNameOptions): Promise<SearchByNameResponse> {
        const token = await this.getToken();
        let point = points.search;
        let {query, type, name, limit, offset, include_external} = options;

        let queryString = "";

        if (query) for (let key of Object.keys(query)) {
            queryString += ` ${key}:${query[key]}`
        }

        queryString = replace(point.url, {
            $query: queryString,
            $name: name,
            $type: type,
            $limit: limit ?? 20,
            $offset: offset ?? 0,
            $include_external: include_external
        });

        let request = await fetch(queryString, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token.access_token}`
            }
        });

        let response = await request.json();

        if (request.status !== 200) throw new Error(`${request.statusText} - ${response.error.message}`);
        return response;
    }

    getMarkets(): Array<available_markets> {
        return <Array<available_markets>>points.markets;
    }

    getGenres(): Array<available_genres> {
        return <Array<available_genres>>points.genres;
    }
}