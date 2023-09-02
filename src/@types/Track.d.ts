import {SimplifiedAlbum, available_markets, SimplifiedArtist, Artist} from "./index";

export interface Track extends SimplifiedTrack {
    album?: SimplifiedAlbum;
    external_ids?: TrackExternalIDs;
    popularity?: number;
}

export interface SimplifiedTrack {
    artists?: Array<SimplifiedArtist>;
    available_markets?: Array<available_markets>;
    disc_number?: number;
    duration_ms?: number;
    explicit?: boolean;
    external_urls?: TrackExternalURLS;
    href?: string;
    id?: string;
    is_playable?: boolean;
    linked_from?: TrackLinkedFrom; 
    restrictions?: TrackRestrictions;
    name?: string;
    preview_url?: string;
    track_number?: number;
    type?: string;
    uri: string;
    is_local?: boolean;
}

export interface TrackRestrictions {
    reason?: "market" | "product" | "explicit";
}

export interface TrackLinkedFrom {
    external_urls?: TrackExternalURLS;
    href?: string;
    id?: string;
    type?: "track";
    uri?: string;
}

export interface TrackExternalURLS {
    spotify?: string;
}

export interface TrackExternalIDs {
    isrc?: string;
    ean?: string;
    upc?: string;
}