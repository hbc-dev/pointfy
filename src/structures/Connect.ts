import { resolve } from "path";
import points from "../points.json";
import dotenv from "dotenv";
import {replace} from "../utils/index";
import {
    Options,
    AccessToken
} from "../types/Connect";

dotenv.config({
    path: resolve(__dirname, '../../.env')
});

class Connect {
    public clientId: string;
    public clientSecret: string;

    private token: Promise<AccessToken>;

    constructor(options: Options) {
        this.clientId = options.clientId;
        this.clientSecret = options.clientSecret;

        this.token = this.getToken();
    }

    async getToken(): Promise<AccessToken> {
        const point = points.access_token;

        let request = await fetch(point.url, {
            method: "POST",
            headers: {
                ...point.headers
            },
            body: replace(point.body, {
                $CLIENT_ID: this.clientId,
                $CLIENT_SECRET: this.clientSecret
            })
        });

        if (request.status !== 200) throw Error(request.statusText);
        
        let token = await request.json();

        return {
            ...token,
            expires_date: Date.now() + token.expires_in
        }
    }

    async refreshToken(): Promise<AccessToken> {
        let token = await this.token;
        
        if (Date.now() >= token.expires_date) {
            this.token = this.getToken();
        }

        return this.token;
    }
}

const conexion = new Connect({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
});

(async () => console.log(await conexion.refreshToken()))();