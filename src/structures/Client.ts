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
    AlbumTracksGetterOptions
} from "../@types";

export class Client {
    public readonly clientId: string;
    public readonly clientSecret: string;
    private _token: Promise<AccessToken>;

    constructor(options: Options) {
        this.clientId = options.clientId;
        this.clientSecret = options.clientSecret;
        this._token = this.getToken();
    }

    async getToken(): Promise<AccessToken> {
        const point = points.access_token;

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
        
        if (Date.now() >= token.expires_date) this._token = this.getToken();

        return this._token;
    }
    
    async searchAlbum(options: AlbumGetterOptions): Promise<Album> {
        const point = points.albums;
        let {id, market} = options;

        const httpRequest = replace(point.url, {
            $id: id.trim(),
            $market: market ? `?market=${market}` : ""
        });
        
        let request = await fetch(httpRequest, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${(await this._token).access_token}`
            }
        });

        let response = await request.json();
        if (request.status !== 200) throw new Error(`${request.statusText} - ${response.error.message}`);

        return response;
    }

    async searchAlbumTracks(options: AlbumTracksGetterOptions): Promise<AlbumTrack> {
        const point = points.albums;
        let {id, market, limit, offset} = options;

        const httpRequest = replace(point.tracks, {
            $id: id.trim(),
            $market: market ? `market=${market}` : "",
            $limit: limit ?? 20,
            $offset: offset ?? 0
        });

        let request = await fetch(httpRequest, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${(await this._token).access_token}`
            }
        });

        let response = await request.json();

        if (request.status !== 200) throw new Error(`${request.statusText} - ${response.error.message}`);
        return response;
    }

    // some functions to manage the response
    async searchByName(options: SearchByNameOptions): Promise<SearchByNameResponse> {
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
                "Authorization": `Bearer ${(await this._token).access_token}`
            }
        });

        let response = await request.json();

        if (request.status !== 200) throw new Error(`${request.statusText} - ${response.error.message}`);
        return response;
    }

    get token(): Promise<AccessToken> {return this._token;}
}