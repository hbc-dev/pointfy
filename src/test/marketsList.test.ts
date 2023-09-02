import {Client} from "../structures/Client";

interface Options {
    client: Client;
}

export default function marketList(options: Options): void {
    let {client} = options;

    let markets = client.getMarkets();

    // console.log(`Available markets (${markets.length}):\n\n${markets.join("\n")}`);
}