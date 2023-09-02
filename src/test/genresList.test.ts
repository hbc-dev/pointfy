import {Client} from "../structures/Client";

interface Options {
    client: Client;
}

export default function marketList(options: Options): void {
    let {client} = options;

    let genres = client.getGenres();

    // console.log(`Available genres (${genres.length}):\n\n${genres.join("\n")}`);
}