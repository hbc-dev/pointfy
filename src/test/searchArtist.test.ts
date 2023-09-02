import { SearchByNameOptions } from "../@types";
import {Client} from "../structures/Client";

interface Options {
    client: Client;
    searchOptions: SearchByNameOptions;
}

export default async function searchArtist(options: Options): Promise<void> {    
    let {client, searchOptions} = options;

    let searchByName = (await client.searchByName(searchOptions)).artists
    
    // console.debug(`\nFound ${searchByName.total} artists`);

    let searchById = await client.searchArtist({
        id: searchByName.items[0].id,
    });

    // console.log(`Found new artist: ${searchById.name} (${searchById.followers.total} followers)`);
}