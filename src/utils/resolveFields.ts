import { PlaylistFields } from "../@types";

export default function resolveFields(options: PlaylistFields): string {
    let filter = [];

    for (let field of Object.keys(options)) {
        let value = options[field]

        if (typeof value == "object") filter.push(`${field}(${resolveFields(value)})`)
        else filter.push(value ? field : `!${field}`);
    }

    return filter.join(",");
}