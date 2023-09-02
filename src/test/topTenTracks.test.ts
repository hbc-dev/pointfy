import { ArtistTopTracksGetterOptions } from "../@types";
import {Client} from "../structures/Client";

interface Options {
    client: Client;
    searchOptions: ArtistTopTracksGetterOptions;
}

function redable(value: number): string {// ms to mm:ss
    let date = new Date(value);
    let seconds = date.getSeconds();

    return date.getMinutes() + ':' + (seconds <= 9 ? `0${seconds}` : `${seconds}`);
}

export default async function topTenTracks(options: Options): Promise<void> {    
    let {client, searchOptions} = options;

    let topten = await client.searchArtistTopTracks(searchOptions);
    let artist = await client.searchArtist({
        id: searchOptions.id
    });

    let list = topten.map((track, i) => `${i+1} ${track.name} from ${track.album?.name} - ${redable(track.duration_ms)}`).join('\n');

    // console.debug(`TOP TEN OF ${artist.name}: \n\n${list}`);
}