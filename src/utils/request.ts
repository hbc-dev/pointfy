import replace from "./replace";
import { Client } from "../structures/Client";
import points from "../points.json";

type RequestType = "bearer_token_action" | "get_access_token" | "get_embed";

interface RequestOptions {
    client?: Client;
    type: RequestType;
    url: string;
    values?: Object;
    method?: "GET" | "POST" | "DELETE" | "PUT";
}

export default async function request(options: RequestOptions): Promise<any> {
    let {type, url, values = {}, method = "GET", client} = options;
    let httpRequest: string; // url with parsed values
    let request: Response;// the request object
    let response: any;// the response object

    if (type == "bearer_token_action") {
        if (!client) throw new Error(`Invalid client`);

        httpRequest = replace(url, values);
        request = await fetch(httpRequest, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${(await client.getToken()).access_token}`
            }
        });

        response = await request.json();
    } else if (type == "get_access_token") {
        if (!client) throw new Error(`Invalid client`);
        
        request = await fetch(url, {
            method: "POST",
            headers: {
                ...points.access_token.headers
            },
            body: replace(points.access_token.body, {
                $CLIENT_ID: client.clientId,
                $CLIENT_SECRET: client.clientSecret
            })
        });

        response = await request.json();
    } else if (type == "get_embed") {
        httpRequest = replace(url, values);
        request = await fetch(httpRequest);
        response = await request.json();
    }

    if (request.status !== 200) throw new Error(`[${request.status}] ${request.statusText} - ${response?.error.message}`);
    return response;
}