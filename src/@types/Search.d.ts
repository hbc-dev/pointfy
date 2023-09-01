import {QueryAlbum, SimplifiedAlbum} from "./Album";

export interface SearchByNameOptions {
    name: string,
    type: "album" | "artist" | "playlist" | "track" | "show" | "episode" | "audiobook";
    query?: QueryOptions;
    limit?: number;
    offset?: number;
    include_external?: "audio";
}

export interface QueryOptions extends QueryAlbum {
    track?: string;
    genre?: string;
}

export interface SearchByNameResponseAlbums {
    albums?: SearchByNameProperties<SimplifiedAlbum>;
}

export interface SearchByNameResponse extends SearchByNameResponseAlbums {}

export interface SearchByNameProperties<Item> {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: number;
    total: number;
    items: Array<Item>;
}
