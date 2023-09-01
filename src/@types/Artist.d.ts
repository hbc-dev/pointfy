export interface Artist {}

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