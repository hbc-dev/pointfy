export default function replace(text: string, map: Object): string {
    for (let key of Object.keys(map)) {
        text = text.replaceAll(key, map[key]);
    }

    return text;
}