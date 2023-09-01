import {Client} from "../structures/Client";
import {config} from "dotenv";
config();

// EXAMPLES
import getTrackList from "./trackList.test";
import refreshToken from "./refreshToken.test";
import searchAlbum from "./searchAlbum.test";

(async () => {
    // init a client instance
    const client = new Client({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    });

    // get and refresh the token
    refreshToken(client);

    // search album by name and id
    searchAlbum({
        client,
        searchOptions: {
            name: "Born to die",
            type: "album",
            query: {
                artist: "Lana del Rey"
            }
        },
    });

    // search album tracks by id
    getTrackList({
        client,
        preferences: {
            id: "3FgvMxabfL5UtlcPzASEhh",
            limit: 50,
        }
    });
})();