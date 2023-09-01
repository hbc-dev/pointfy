import {available_markets} from "./index";
import {SimplifiedArtist} from "./Artist";

export interface Track {

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