import { Images, SearchByNameProperties, available_markets } from "./index";

export interface CategoryGetterOptions {
    category_id: string;
    country?: available_markets;
    locale?: string;
}

export interface CategoriesGetterOptions {
    country?: available_markets;
    locale?: string;
    limit?: number;
    offset?: number;
}

export interface Category {
    href: string;
    icons: Array<Images>;
    id: string;
    name: string;
}

export type CategoryPages = SearchByNameProperties<Category>;