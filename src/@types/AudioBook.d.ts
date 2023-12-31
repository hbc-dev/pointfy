import { ChaptersPages, Copyrights, ExternalURLs, Image, SearchByNameProperties, available_markets } from "./index";

export interface AudioBookGetterOptions {
    id: string;
    market?: available_markets;
}

export interface AudioBookChapetersGetterOptions {
    id: string;
    market?: available_markets;
    limit?: number;
    offset?: number;
}

export interface AudioBook extends SimplifiedAudioBook {
    external_urls: ExternalURLs;
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
    images: Array<Image>;
    languages: Array<string>;
    media_type: string;
    name: string;
    narrators: Array<Narrator>;
    publisher: string;
    type: "audiobook";
    uri: string;
    total_chapters: number;
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