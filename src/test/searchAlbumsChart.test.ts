import { ArtistAlbumsGetterOptions } from "../@types";
import {Client} from "../structures/Client";

interface Options {
    client: Client;
    searchOptions: ArtistAlbumsGetterOptions;
}

export default async function searchAlbumsChart(options: Options): Promise<void> {    
    let {client, searchOptions} = options;

    let searchByName = await client.searchArtistAlbums(searchOptions);
    let chart = searchByName.items.map(album => `${album.name} (${album.release_date}) - ${album.total_tracks} tracks`).join('\n');
    
    // console.log(`Found ${searchByName.total} albums. Album chart:\n\n${chart}`);
}