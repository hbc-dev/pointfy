import { EmbedOptions, EmbedResponse, EmbedData, EmbedItemType } from "../@types";
import { replace, request } from "../utils/index";
import points from "../points.json";

function replaceURL(values: EmbedOptions): string {
    return replace(points.embeds.base, {
        $type: values.item_type,
        $id: values.item_id
    });
}

export class Embed {
    private data: EmbedData;

    constructor(options: EmbedOptions) {
        let item_url = replaceURL(options);

        this.data = {item_url, ...options};
    }

    async toJSON(): Promise<EmbedResponse> {
        try {
            const response = await request({
                type: "get_embed",
                url: points.embeds.url,
                values: {
                    $url: this.data.item_url
                }
            });

            return {
                ...this.data,
                ...response
            };
        } catch {
            throw new Error(`Something was wrong, all data is correct?`);
        }
    }

    setId(id: string): Embed {
        this.data.item_id = id;
        this.data.item_url = replaceURL({
            item_id: id,
            item_type: this.data.item_type
        });

        return this;
    }

    setType(type: EmbedItemType): Embed {
        this.data.item_type = type;
        this.data.item_url = replaceURL({
            item_type: type,
            item_id: this.data.item_id
        });

        return this;
    }

    get id(): string { return this.data.item_id; }

    get type(): EmbedItemType { return this.data.item_type; }

    get url(): string { return this.data.item_url; }
}