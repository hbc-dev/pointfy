import {Client} from "../structures/Client";
import {config} from "dotenv";
config();

// EXAMPLES
import getTrackList from "./trackList.test";
import refreshToken from "./refreshToken.test";
import searchAlbum from "./searchAlbum.test";
import searchArtist from "./searchArtist.test";
import searchAlbumsChart from "./searchAlbumsChart.test";
import topTenTracks from "./topTenTracks.test";
import relatedArtist from "./relatedArtist.test"

(async () => {
    // init a client instance
    const client = new Client({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    });

    // get and refresh the token
    // refreshToken(client); => only for the test

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

    // search artist by name and id
    searchArtist({
        client,
        searchOptions: {
            name: "Kanye West",
            type: "artist",
            limit: 1,
        }
    });

    // search albums of an artist by id
    searchAlbumsChart({
        client,
        searchOptions: {
            id: "06HL4z0CvFAxyc27GXpf02",
            include_groups: ["album"],
            limit: 50
        }
    });

    // search the top 10 of an artist by id
    topTenTracks({
        client,
        searchOptions: {
            id: "6goQbtqjPhPns8RVRXTyp7",
            market: "ES" // spotify api bug - must be present
        }
    });

    // search the related artist by id
    relatedArtist({
        client,
        searchOptions: {
            id: "5szilpXHcwOqnyKLqGco5j"
        }
    });
})();