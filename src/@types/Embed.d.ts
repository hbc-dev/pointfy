export interface EmbedResponse {
    embed_type: string;
    item_id: string;
    item_url: string;
    html?: string;
    width?: number;
    height?: number;
    version?: string;
    provider_name?: "Spotify";
    provider_url?: "https://www.spotify.com";
    type?: "rich";
    title?: string;
    thumbnail_url?: string;
    thumbnail_width?: number;
    thumbnail_height?: number;
}

export interface EmbedData {
    item_type: EmbedItemType;
    item_id: string;
    item_url: string;
}

export type EmbedItemType = "album" | "artist" | "playlist" | "track" | "show" | "episode" | "audiobook";