export interface Options {
    clientId: string;
    clientSecret: string;
}

export interface AccessToken {
    access_token: string;
    token_type: number;
    expires_in: number;
    expires_date: number;
}