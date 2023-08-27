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

    // search album by id
    let album = await conexion.searchAlbum({
        id: "5VoeRuTrGhTbKelUfwymwu"
    });

    console.debug(`Found album (${album.name}) with ${album.total_tracks} tracks`);

    // search album by name
    let beefie = (await conexion.searchAlbum({
        id: "Traumatismo Kraneoencefalico",
        query: {
            artist: "Goa"
        }
    })).albums.items[0];

    console.debug(`Found album (${beefie?.name}) with ${beefie?.total_tracks} tracks`);
})();