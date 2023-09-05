import {
    QueryAlbum,
    SearchByNameResponseAlbum,
    SearchByNameResponseArtist,
    SearchByNameResponseAudioBook,
    SearchByNameResponseTrack,
    SearchByNameResponseEpisode,
    SearchByNameResponsePlaylist
} from "./index";

export interface SearchByNameOptions {
    name: string,
    type: "album" | "artist" | "playlist" | "track" | "show" | "episode" | "audiobook";
    query?: QueryOptions;
    limit?: number;
    offset?: number;
    include_external?: "audio";
}

export interface QueryOptions extends QueryAlbum {
    track?: string;
    genre?: string;
}

export interface SearchByNameResponse extends 
SearchByNameResponseAlbum,
SearchByNameResponseArtist,
SearchByNameResponseTrack,
SearchByNameResponseAudioBook,
SearchByNameResponseEpisode,
SearchByNameResponsePlaylist {}

export interface SearchByNameProperties<Item> {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: number;
    total: number;
    items: Array<Item>;
}
