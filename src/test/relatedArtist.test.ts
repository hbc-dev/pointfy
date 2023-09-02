import { ArtistRelatedArtistsGetterOptions } from "../@types";
import {Client} from "../structures/Client";

interface Options {
    client: Client;
    searchOptions: ArtistRelatedArtistsGetterOptions;
}

export default async function relatedArtist(options: Options): Promise<void> {    
    let {client, searchOptions} = options;

    let relatedArtists = await client.searchArtistRelatedArtists(searchOptions);
    let artist = await client.searchArtist(searchOptions);
    let list = relatedArtists.map(artist => `${artist.name} (${artist.id})`).join('\n');

    console.debug(`Found ${relatedArtists.length} related artists of ${artist.name}: \n\n${list}`);
}