import { ChaptersPages, Copyrights, Images, SearchByNameProperties, available_markets } from "./index";

export interface AudioBookGetterOptions {
    id: string;
    market?: available_markets;
}

export interface AudioBook extends SimplifiedAudioBook {
    external_urls: AudioBookExternalURLs;
    chapters: ChaptersPages;
}

export interface SimplifiedAudioBook {
    authors: Array<Author>;
    available_markets: Array<available_markets>;
    copyrights: Array<Copyrights>;
    description: string;
    html_description: string;
    edition?: string;
    explicit: boolean;
    href: string;
    id: string;
    images: Array<Images>;
    languages: Array<string>;
    media_type: string;
    name: string;
    narrators: Array<Narrator>;
    publisher: string;
    type: "audiobook";
    uri: string;
    total_chapters: number;
}

export interface AudioBookExternalURLs {
    spotify?: string;
}

export interface Author {
    name?: string;
}

export interface Narrator {
    name?: string;
}

export interface SearchByNameResponseAudioBook {
    audiobooks?: AudioBookPages;
}

export type AudioBookPages = SearchByNameProperties<SimplifiedAudioBook>;