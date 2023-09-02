import { SearchByNameOptions } from "../@types";
import {Client} from "../structures/Client";

interface Options {
    client: Client;
    searchOptions: SearchByNameOptions;
}

export default async function searchAlbum(options: Options): Promise<void> {    
    let {client, searchOptions} = options;

    let searchByName = (await client.searchByName(searchOptions)).albums;
    
    // console.debug(`\nFound ${searchByName?.total} albums`);

    let searchById = await client.searchAlbum({
        id: searchByName?.items[0].id
    });

    // console.debug(`The first search was ${searchById.name} by ${searchById.artists[0].name}`);
}