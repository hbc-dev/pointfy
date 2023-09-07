import { PlaylistGetterOptions } from "../@types";
import {Client} from "../structures/Client";

interface Options {
    client: Client; // the client
    preferences: PlaylistGetterOptions; // options of the getter
}

const is_local = (v: boolean) => v ? "Is local" : "No local";  

function redable(value: number): string {// ms to mm:ss
    let date = new Date(value);
    let seconds = date.getSeconds();

    return date.getMinutes() + ':' + (seconds <= 9 ? `0${seconds}` : `${seconds}`);
}

export default async function getTrackList(options: Options):  Promise<void> {    
    let {client, preferences} = options;

    let playlist = await client.searchPlaylist(preferences);// all the tracks of the album
    let list = playlist.tracks?.items
    .map(track => `${track.track?.name} - ${redable(track.track?.duration_ms)} | ${is_local(track.is_local)}`).join('\n')

    // console.log(`\n${playlist.name} by ${playlist.owner?.display_name} with ${playlist.tracks?.total} tracks\n\n${list}`);// debug the track list
}