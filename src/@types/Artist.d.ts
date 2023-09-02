import { Images, SearchByNameProperties, available_markets } from "./index";

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
    artists?: SearchByNameProperties<SimplifiedArtist>
}

export interface Artist extends SimplifiedArtist {
    followers?: ArtistFollowers;
    genres?: Array<string>;
    images?: Array<Images>;
    popularity?: number;
}

export interface ArtistFollowers {
    href?: string;
    total?: number;
}

export interface SimplifiedArtist {
    external_urls?: ArtistExternalURLS;
    href?: string;
    id?: string;
    name?: string;
    type?: "artist";
    uri?: string;
}

export interface ArtistExternalURLS {
    spotify?: string;
}