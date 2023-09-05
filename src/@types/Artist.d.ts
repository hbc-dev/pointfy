import { ExternalURLs, Followers, Image, SearchByNameProperties, available_genres, available_markets } from "./index";

export interface ArtistGetterOptions {
    id: string;
}

export interface ArtistAlbumsGetterOptions {
    id: string;
    include_groups?: Array<"album" | "single" | "appears_on" | "compilation">;
    market?: available_markets;
    limit?: number;
    offset?: number;
}

export interface ArtistTopTracksGetterOptions {
    id: string;
    market?: available_markets;
}

export interface ArtistRelatedArtistsGetterOptions {
    id: string;
}

export interface SearchByNameResponseArtist {
    artists?: ArtistPages;
}

export interface Artist extends SimplifiedArtist {
    followers?: Followers;
    genres?: Array<available_genres>;
    images?: Array<Image>;
    popularity?: number;
}

export interface SimplifiedArtist {
    external_urls?: ExternalURLs;
    href?: string;
    id?: string;
    name?: string;
    type?: "artist";
    uri?: string;
}

export type ArtistPages = SearchByNameProperties<Artist>;