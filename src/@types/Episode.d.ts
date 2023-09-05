import { ExternalURLs, Image, SearchByNameProperties, Show, available_markets } from "./index";

export interface EpisodeGetterOptions {
    id: string;
    market?: available_markets;
}

export interface Episode extends SimplifiedEpisode {
    show: Show;
}

export interface SimplifiedEpisode {
    audio_preview_url: string;
    description: string;
    html_description: string;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalURLs;
    href: string;
    id: string;
    images: Array<Image>;
    is_externally_hosted: boolean;
    is_playable: boolean;
    /**
     * @deprecated use languages field instead
     */
    language?: string;
    languages: Array<string>;
    name: string;
    release_date: string;
    release_date_precision: "year" | "month" | "day";
    resume_point: EpisodeResumePoint;
    type: string;
    uri: string;
    restrictions?: EpisodeRestrictions;
}

export interface SearchByNameResponseEpisode {
    episodes?: EpisodePages;
}

export interface EpisodeResumePoint {
    fully_played?: boolean;
    resume_position_ms?: number;
}

export interface EpisodeRestrictions {
    reason?: "market" | "product" | "explicit"
}

export type EpisodePages = SearchByNameProperties<SimplifiedEpisode>;