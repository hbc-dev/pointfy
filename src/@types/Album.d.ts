import {
    available_markets,
    Image,
    SimplifiedArtist,
    SimplifiedTrack,
    SearchByNameProperties,
    Copyrights,
    available_genres,
    ExternalURLs,
    ExternalIDs
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
    external_ids: ExternalIDs;
    genres: Array<available_genres>;
    label: string;
    popularity: number;
}

export interface AlbumRestrictions {
    reason?: "market" | "product" | "explicit";
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
    external_urls: ExternalURLs;
    href: string;
    id: string;
    images: Array<Image>;
    name: string;
    release_date: string;
    release_date_precision: "year" | "month" | "day";
    restrictions?: AlbumRestrictions;
    type: "album";
    uri: string;
    artists: Array<SimplifiedArtist>
}

export interface SearchByNameResponseAlbum {
    albums?: AlbumPages;
}

export type AlbumPages = SearchByNameProperties<SimplifiedAlbum>;