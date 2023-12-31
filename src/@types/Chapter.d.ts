import {AudioBook, ExternalURLs, Image, SearchByNameProperties, available_markets} from "./index";

export interface ChapterGetterOptions {
    id: string;
    market?: available_markets;
}

export interface Chapter extends SimplifiedChapter {
    audiobook: AudioBook;
}

export interface SimplifiedChapter {
    audio_preview_url: string;
    available_markets?: Array<available_markets>;
    chapter_number: number;
    description: string;
    html_description: string;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalURLs;
    href: string;
    id: string;
    images: Array<Image>;
    is_playable: boolean;
    languages: Array<string>;
    name: string;
    release_date: string;
    release_date_precision: "year" | "month" | "day";
    resume_point: ChapterResumePoint;
    type: "episode";
    uri: string;
    restrictions: ChapterRestrictions;
}

export interface ChapterResumePoint {
    fully_played?: boolean;
    resume_position_ms?: number;
}

export interface ChapterRestrictions {
    reason?: "market" | "product" | "explicit" | "payment_required";
}

export type ChaptersPages = SearchByNameProperties<SimplifiedChapter>;