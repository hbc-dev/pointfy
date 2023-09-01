import {Client} from "../structures/Client";

export default async function refreshToken(client: Client): Promise<void> {
    let token = await client.getToken();// get and set the token
    console.log(token);

    setInterval(async () => {
        let refreshedToken = await client.refreshToken();// refresh the token

        console.debug(refreshedToken);
    }, token.expires_in * 1000);// 1h
}