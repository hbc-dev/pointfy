import { CategoriesGetterOptions } from "../@types";
import {Client} from "../structures/Client";

interface Options {
    client: Client;
    searchOptions?: CategoriesGetterOptions;
}

export default async function categoriesList(options: Options): Promise<void> {
    let {client, searchOptions} = options;

    let categories = await client.searchCategories(searchOptions);
    let list = categories.items.map(category => `${category.name} (${category.id})`).join('\n')

    // console.log(`Available categories (${categories.total}):\n\n${list}`);
}