import { ExternalURLs, Followers } from "./index";

export interface User extends SimplifiedUser {
    display_name?: string;
}

export interface SimplifiedUser {
    external_urls?: ExternalURLs,
    followers?: Followers,
    href?: string;
    id?: string;
    type?: "user";
    uri?: string;
}