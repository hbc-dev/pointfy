import { NewReleasesGetterOptions } from "../@types";
import {Client} from "../structures/Client";

interface Options {
    client: Client;
    searchOptions?: NewReleasesGetterOptions;
}

export default async function newReleases(options: Options): Promise<void> {
    let {client, searchOptions} = options;

    let releases = (await client.searchNewReleases(searchOptions)).items;
    let list = releases.map(album => `${album.name} by ${album.artists[0].name} - ${album.release_date}`);

    // console.log(`* NEW RELEASES *\n\n${list.join('\n')}`);
}