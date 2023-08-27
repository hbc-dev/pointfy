export type available_markets = "AD" | "AE" | "AG" | "AL" | "AM" | "AO" | "AR" | "AT" | "AU" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BN" | "BO" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CD" | "CG" | "CH" | "CI" | "CL" | "CM" | "CO" | "CR" | "CV" | "CW" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "ES" | "ET" | "FI" | "FJ" | "FM" | "FR" | "GA" | "GB" | "GD" | "GE" | "GH" | "GM" | "GN" | "GQ" | "GR" | "GT" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IN" | "IQ" | "IS" | "IT" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KR" | "KW" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MG" | "MH" | "MK" | "ML" | "MN" | "MO" | "MR" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NE" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NZ" | "OM" | "PA" | "PE" | "PG" | "PH" | "PK" | "PL" | "PS" | "PT" | "PW" | "PY" | "QA" | "RO" | "RS" | "RW" | "SA" | "SB" | "SC" | "SE" | "SG" | "SI" | "SK" | "SL" | "SM" | "SN" | "SR" | "ST" | "SV" | "SZ" | "TD" | "TG" | "TH" | "TJ" | "TL" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "US" | "UY" | "UZ" | "VC" | "VE" | "VN" | "VU" | "WS" | "XK" | "ZA" | "ZM" | "ZW";

export interface Options {
    clientId: string;
    clientSecret: string;
}

export interface AccessToken {
    access_token: string;
    token_type: number;
    expires_in: number;
    expires_date: number;
}

export interface Album {
    album_type: "album" | "single" | "compilation";
    total_tracks: number;
    available_markets: Array<available_markets>;
    external_urls: AlbumExternalURLS;
    href: string;
    id: string;
    images: Array<AlbumImages>;
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions?: AlbumRestrictions;
    type: "album";
    uri: string;
    copyrights?: Array<AlbumCopyright>;
    external_ids?: AlbumExternalIDs;
    genres?: Array<string>;
    label?: string;
    popularity?: number;
    artist?: Array<Artist>;
    tracks?: Array<AlbumTrack>;
}

export interface Artist {

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

export interface AlbumTrack {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Array<SimplifiedTrack>;
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

export interface AlbumExternalIDs {
    isrc?: string;
    ean?: string;
    upc?: string;
}

export interface AlbumCopyright {
    text?: string;
    type?: string;
}

export interface AlbumRestrictions {
    reason?: "market" | "product" | "explicit";
}

export interface AlbumImages {
    url: string;
    height: number;
    width: number;
}

export interface AlbumExternalURLS {
    spotify?: string;
}

export interface AlbumGetterOptions {
    id: string;
    market?: available_markets;
    query?: QueryByNameAlbum;
}

export interface SearchByNameOptions {
    type: "album" | "artist" | "playlist" | "track" | "show" | "episode" | "audiobook";
    query?: QueryByNameOptions;
    name: string
}

export interface QueryByNameOptions extends QueryByNameAlbum {
    track?: string;
    genre?: string;
}

export interface QueryByNameAlbum {
    album?: string;
    artist?: string
    upc?: "hispter" | "new"
    year?: number;
}

export interface QueryByName {
    tracks?: QueryByNameDefaultProperties;
    // artists?:
}

export interface QueryByNameDefaultProperties {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: number;
    total: number;
    items: any;
}

export interface Track {}