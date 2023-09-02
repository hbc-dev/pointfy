import {
    available_markets,
    Images,
    SimplifiedArtist,
    SimplifiedTrack,
    SearchByNameProperties,
    Copyrights,
    available_genres
} from "./index";

export interface AlbumGetterOptions {
    id: string;
    market?: available_markets;
}

export interface AlbumTracksGetterOptions {
    id: string;
    market?: available_markets;
    limit?: number;
    offset?: number;
}

export interface NewReleasesGetterOptions {
    country?: available_markets;
    limit?: number;
    offset?: number;
}

export interface QueryAlbum {
    album?: string;
    artist?: string
    upc?: "hispter" | "new"
    year?: number;
}

export interface Album extends SimplifiedAlbum {
    tracks: Array<AlbumTrack>;
    copyrights: Array<Copyrights>;
    external_ids: AlbumExternalIDs;
    genres: Array<available_genres>;
    label: string;
    popularity: number;
}

export interface AlbumExternalURLS {
    spotify?: string;
}

export interface AlbumRestrictions {
    reason?: "market" | "product" | "explicit";
}

export interface AlbumExternalIDs {
    isrc?: string;
    ean?: string;
    upc?: string;
}

export interface AlbumTrack {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Array<SimplifiedTrack>;
}

export interface SimplifiedAlbum {
    album_type: "album" | "single" | "compilation";
    total_tracks: number;
    available_markets: Array<available_markets>;
    external_urls: AlbumExternalURLS;
    href: string;
    id: string;
    images: Array<Images>;
    name: string;
    release_date: string;
    release_date_precision: "year" | "month" | "day";
    restrictions?: AlbumRestrictions;
    type: "album";
    uri: string;
    artists: Array<SimplifiedArtist>
}

export interface SearchByNameResponseAlbums {
    albums?: AlbumPages;
}

export type AlbumPages = SearchByNameProperties<SimplifiedAlbum>;