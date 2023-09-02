import points from "../points.json";
import { replace, request } from "../utils/index";
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
        if (this._token) return this._token;

        const response = await request({
            client: this,
            url: points.access_token.url,
            type: "get_access_token"
        });

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
        let {id, market} = options;

        const response = await request({
            client: this,
            type: "bearer_token_action",
            url: points.albums.url,
            values: {
                $id: id,
                market: market ? `?market=${market}` : ""
            }
        });

        return response;
    }

    async searchAlbumTracks(options: AlbumTracksGetterOptions): Promise<AlbumTrack> {
        let {id, market, limit, offset} = options;

        const response = await request({
            client: this,
            type: "bearer_token_action",
            url: points.albums.tracks,
            values: {
                $id: id,
                $market: market ? `market=${market}` : "",
                $limit: limit ?? 20,
                $offset: offset ?? 0
            }
        });

        return response;
    }

    async searchNewReleases(options: NewReleasesGetterOptions = {}): Promise<AlbumPages> {
        let {country, limit, offset} = options;

        const response = await request({
            client: this,
            type: "bearer_token_action",
            url: points.albums.new_releases,
            values: {
                $limit: limit ?? 20,
                $offset: offset ?? 0,
                $country: country ? `&country=${country}` : ""
            }
        });

        return response.albums;
    }

    async searchArtist(options: ArtistGetterOptions): Promise<Artist> {
        let {id} = options;

        const response = await request({
            client: this,
            type: "bearer_token_action",
            url: points.artists.url,
            values: {
                $id: id
            }
        });

        return response;
    }

    async searchArtistAlbums(options: ArtistAlbumsGetterOptions): Promise<AlbumPages> {
        let {id, market, include_groups, offset, limit} = options;

        const response = request({
            client: this,
            type: "bearer_token_action",
            url: points.artists.albums,
            values: {
                $id: id,
                $market: market ? `&market=${market}` : "",
                $include_groups: include_groups ? `&include_groups=${include_groups.join(',')}` : "",
                $limit: limit ?? 20,
                $offset: offset ?? 0
            }
        });

        return response;
    }

    async searchArtistTopTracks(options: ArtistTopTracksGetterOptions): Promise<Array<Track>> {
        let {id, market} = options;

        const response = await request({
            client: this,
            type: "bearer_token_action",
            url: points.artists.top_tracks,
            values: {
                $id: id,
                $market: market ? `?market=${market}` : ""
            }
        });

        return response.tracks;
    }

    async searchArtistRelatedArtists(options: ArtistRelatedArtistsGetterOptions): Promise<Array<Artist>> {
        let {id} = options;

        const response = await request({
            client: this,
            type: "bearer_token_action",
            url: points.artists.related_artists,
            values: {
                $id: id
            }
        });

        return response.artists;
    }

    async searchAudioBook(options: AudioBookGetterOptions): Promise<AudioBook> {
        let {id, market} = options;

        const response = await request({
            client: this,
            type: "bearer_token_action",
            url: points.audio_books.url,
            values: {
                $id: id,
                $market: market ? `?market=${market}` : ""
            }
        });

        return response;
    }

    async searchAudioBookChapters(options: AudioBookChapetersGetterOptions): Promise<ChaptersPages> {
        let {id, limit, offset, market} = options;

        const response = await request({
            client: this,
            type: "bearer_token_action",
            url: points.audio_books.chapters,
            values: {
                $id: id,
                $limit: limit ?? 20,
                $offset: offset ?? 0,
                $market: market ? `&market=${market}` : ""    
            }
        });

        return response;
    }

    async searchCategory(options: CategoryGetterOptions): Promise<Category> {
        let {category_id, country, locale} = options;

        const response = await request({
            client: this,
            type: "bearer_token_action",
            url: points.categories.url,
            values: {
                $category_id: (country && locale)? `${category_id}?$country&$locale` : country ? `${category_id}?$country` : locale ? `${category_id}?$locale` : category_id,
                $country: country ? `country=${country}` : "",
                $locale: locale ? `locale=${locale}` : ""
            }
        });

        return response;
    }

    async searchCategories(options: CategoriesGetterOptions = {}): Promise<CategoryPages> {
        let {country, locale, limit, offset} = options;

        const response = await request({
            client: this,
            type: "bearer_token_action",
            url: points.categories.several,
            values: {
                $limit: limit ?? 20,
                $offset: offset ?? 0,
                $country: country ? `&country=${country}` : "",
                $locale: locale ? `&locale=${locale}` : "" 
            }
        });

        return response.categories;
    }

    async searchChapter(options: ChapterGetterOptions): Promise<Chapter> {
        let {id, market} = options;

        const response = await request({
            client: this,
            type: "bearer_token_action",
            url: points.chapters.url,
            values: {
                $id: id,
                $market: market ? `?market=${market}` : ""
            }
        });

        return response;
    }

    // some functions to manage the response
    async searchByName(options: SearchByNameOptions): Promise<SearchByNameResponse> {
        let {query, type, name, limit, offset, include_external} = options;
        let queryString = "";

        if (query) for (let key of Object.keys(query)) {
            queryString += ` ${key}:${query[key]}`
        }

        const response = await request({
            client: this,
            type: "bearer_token_action",
            url: points.search.url,
            values: {
                $query: queryString,
                $name: name,
                $type: type,
                $limit: limit ?? 20,
                $offset: offset ?? 0,
                $include_external: include_external
            }
        });

        return response;
    }

    getMarkets(): Array<available_markets> {
        return <Array<available_markets>>points.markets;
    }

    getGenres(): Array<available_genres> {
        return <Array<available_genres>>points.genres;
    }
}