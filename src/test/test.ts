import {Connect} from "../structures/Connect";
import {config} from "dotenv";
config();

const conexion = new Connect({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
});

(async () => {
    // refresh the token
    let refreshedToken = await conexion.refreshToken();

    console.debug(refreshedToken);

    // get the token
    let token = await conexion.getToken();

    console.debug(token);

    // search album by name
    let SimplifiedAlbum = (await conexion.searchByName({
        name: "Born",
        type: "album",
        query: {
            artist: "Lana del"
        },
        limit: 1,
        offset: 0,
        include_external: "audio"
    })).albums.items[0];

    console.debug(`Found album: ${SimplifiedAlbum.name} (${SimplifiedAlbum.id})`);

    // search album by id
    let album = await conexion.searchAlbum({
        id: SimplifiedAlbum.id,
        market: "ES"
    });

    console.debug(`Found album (${album?.name}) with ${album?.total_tracks} tracks`);
})();