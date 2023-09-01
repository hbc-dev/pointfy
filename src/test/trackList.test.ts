import { AlbumTracksGetterOptions } from "../@types";
import {Client} from "../structures/Client";

interface Options {
    client: Client; // the client
    preferences: AlbumTracksGetterOptions; // options of the getter
}

function redable(value: number): string {// ms to mm:ss
    let date = new Date(value);
    let seconds = date.getSeconds();

    return date.getMinutes() + ':' + (seconds < 9 ? `0${seconds}` : `${seconds}`);
}

export default async function getTrackList(options: Options):  Promise<void> {    
    let {client, preferences} = options;

    let tracks = await client.searchAlbumTracks(preferences);// all the tracks of the album
    let list = tracks.items
    .map(track => `${track.track_number} ${track.name} - ${redable(track.duration_ms)}`).join('\n');
    // map of all tracks. Example: 1 TrackName - 3:12

    console.log(`\nFound ${tracks.total} tracks.\n\n${list}`);// debug the track list
}