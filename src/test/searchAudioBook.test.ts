import { SearchByNameOptions } from "../@types";
import {Client} from "../structures/Client";

interface Options {
    client: Client;
    searchOptions: SearchByNameOptions;
}

export default async function searchAlbum(options: Options): Promise<void> {    
    let {client, searchOptions} = options;

    let searchByName = (await client.searchByName(searchOptions)).audiobooks;
    
    // console.debug(`\nFound ${searchByName?.total} audiobooks`);

    // let searchById = await client.searchAudioBook({
    //     id: searchByName?.items[0].id
    // });
    // Note: No id works

    let book = searchByName.items[0];
    // console.debug(`The first search was ${book.name} by ${book.authors[0].name}`);
}