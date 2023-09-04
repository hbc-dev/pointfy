import { SearchByNameOptions } from "../@types";
import {Client} from "../structures/Client";

interface Options {
    client: Client;
    searchOptions: SearchByNameOptions;
}

function redable(value: number): string {// ms to mm:ss
    let date = new Date(value);
    let seconds = date.getSeconds();

    return date.getMinutes() + ':' + (seconds <= 9 ? `0${seconds}` : `${seconds}`);
}

export default async function chaptersList(options: Options): Promise<void> {
    let {client, searchOptions} = options;

    let id = (await client.searchByName(searchOptions)).audiobooks?.items[0].id;
    let chapters = await client.searchAudioBookChapters({id});
    let list = chapters.items.map(chapter => `${chapter.name} (${redable(chapter.duration_ms)}) - ${chapter.description}`).join('\n')

    // console.debug(`Found ${chapters.total} chapters:\n\n${list}`);
}