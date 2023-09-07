export interface PlaylistFields {
    followers?: FollowersFields | boolean;
    tracks?: TracksByNamePropertiesFields | boolean;
    collaborative?: boolean;
    description?: boolean;
    external_urls?: ExternalURLsFields | boolean;
    href?: boolean;
    id?: boolean;
    images?: ImageFields | boolean;
    name?: boolean;
    owner?: UserFields | boolean;
    public?: boolean;
    snapshot_id?: boolean;
    type?: boolean;
    uri?: boolean;
}

export type TracksByNamePropertiesFields = SearchByNamePropertiesFields<PlaylistTracksFields>;

export interface PlaylistTracksFields {
    added_at?: boolean;
    added_by?: SimplifiedUserFields | boolean;
    is_local?: boolean;
    track?: TrackFields | EpisodeFields | boolean;
}

export interface EpisodeFields extends SimplifiedEpisodeFields {
    show?: ShowFields | boolean;
}

export interface SimplifiedEpisodeFields {
    audio_preview_url?: boolean;
    description?: boolean;
    html_description?: boolean;
    duration_ms?: boolean;
    explicit?: boolean;
    external_urls?: ExternalURLsFields | boolean;
    href?: boolean;
    id?: boolean;
    images?: ImageFields | boolean;
    is_externally_hosted?: boolean;
    is_playable?: boolean;
    /**
     * @deprecated use languages field instead
     */
    language?: boolean;
    languages?: boolean;
    name?: boolean;
    release_date?: boolean;
    release_date_precision?: boolean;
    resume_point?: EpisodeResumePointFields | boolean;
    type?: boolean;
    uri?: boolean;
    restrictions?: RestrictionsFields | boolean;
}

export interface EpisodeResumePointFields {
    fully_played?: boolean;
    resume_position_ms?: boolean;
}

export interface ShowFields {} // missing tyes with the original Show interface

export interface TrackFields extends SimplifiedTrackFields {
    album?: SimplifiedAlbumFields | boolean;
    external_ids?: ExternalIDsFields | boolean;
    popularity?: boolean;
}

export interface SimplifiedTrackFields {
    artists?: SimplifiedArtistFields | boolean;
    available_markets?: boolean;
    disc_number?: boolean;
    duration_ms?: boolean;
    explicit?: boolean;
    external_urls?: ExternalURLsFields | boolean;
    href?: boolean;
    id?: boolean;
    is_playable?: boolean;
    linked_from?: TrackLinkedFromFields | boolean; 
    restrictions?: TrackRestrictionsFields | boolean;
    name?: boolean;
    preview_url?: boolean;
    track_number?: boolean;
    type?: boolean;
    uri?: boolean;
    is_local?: boolean;
}

export interface SimplifiedArtistFields {
    external_urls?: ExternalURLsFields | boolean;
    href?: boolean;
    id?: boolean;
    name?: boolean;
    type?: boolean;
    uri?: boolean;
}

export interface TrackRestrictionsFields {
    reason?: boolean
}

export interface TrackLinkedFromFields {
    external_urls?: ExternalURLsFields | boolean;
    href?: boolean;
    id?: boolean;
    type?: boolean;
    uri?: boolean;
}

export interface SimplifiedAlbumFields {
    album_type?: boolean;
    total_tracks?: boolean;
    available_markets?: boolean;
    external_urls?: ExternalURLsFields | boolean;
    href?: boolean;
    id?: boolean;
    images?: ImageFields | boolean;
    name?: boolean;
    release_date?: boolean;
    release_date_precision?: boolean;
    restrictions?: RestrictionsFields | boolean;
    type?: boolean;
    uri?: boolean;
    artists?: SimplifiedArtistFields | boolean;
}

export interface RestrictionsFields {
    reason?: boolean;
}

export interface SearchByNamePropertiesFields<ItemFields> {
    href?: boolean;
    limit?: boolean;
    next?: boolean;
    offset?: boolean;
    previous?: boolean;
    total?: boolean;
    items?: ItemFields | boolean ;
}

export interface ImageFields {
    url?: boolean;
    height?: boolean;
    width?: boolean;
}

export interface UserFields extends SimplifiedUserFields {
    display_name?: boolean;
}

export interface SimplifiedUserFields {
    external_urls?: ExternalURLsFields | boolean,
    followers?: FollowersFields | boolean;
    href?: boolean;
    id?: boolean;
    type?: boolean;
    uri?: boolean;
}

export interface FollowersFields {
    href?: boolean;
    total?: boolean;
}

export interface ExternalURLsFields {
    spotify?: boolean;
}

export interface ExternalIDsFields {
    isrc?: boolean;
    ean?: boolean;
    upc?: boolean;
}

export interface SimplifiedPlaylistTracksFields {
    href?: boolean;
    total?: boolean;
}