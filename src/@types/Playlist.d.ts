import { ExternalURLs, Followers, Image, User, SearchByNameProperties, available_markets, SimplifiedUser, Episode, Track, PlaylistFields } from "./index";

export interface PlaylistGetterOptions {
    playlist_id: string;
    market?: available_markets;
    fields?: PlaylistFields | string;
    additional_types?: Array<"track" | "episode">;
}

export interface Playlist extends SimplifiedPlaylist {
    followers?: Followers;
    tracks?: SearchByNameProperties<PlaylistTracks>;
}

export interface SimplifiedPlaylist {
    collaborative?: boolean;
    description?: string;
    external_urls?: ExternalURLs;
    href?: string;
    id?: string;
    images?: Array<Image>;
    name?: string;
    owner?: User;
    public?: boolean;
    snapshot_id?: string;
    tracks?: SimplifiedPlaylistTracks;
    type?: "playlist";
    uri?: string;
}

export interface SimplifiedPlaylistTracks {
    href?: string;
    total?: number;
}

export interface PlaylistTracks {
    added_at?: string;
    added_by?: SimplifiedUser;
    is_local?: boolean;
    track?: Track | Episode;
}

export interface SearchByNameResponsePlaylist {
    playlists?: PlaylistPages;
}

export type PlaylistPages = SearchByNameProperties<SimplifiedPlaylist>;