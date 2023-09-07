# POINTFY
<div align="center">
<img src="https://cdn.discordapp.com/attachments/863514308343889930/1147234182943223960/2581_sin_titulo_20230901201848.png" height="200px" alt="pointfy">


<a href="https://www.npmjs.com/package/pointfy"><img src="https://img.shields.io/npm/v/pointfy.svg?maxAge=3600" alt="npm version"/></a>

<a href="https://www.npmjs.com/package/pointfy"><img src="https://img.shields.io/npm/dt/pointfy.svg?maxAge=3600" alt="npm downloads"/></a>
</div>

# ABOUT
A simple, fast and non-dependant module to interact with the spotify API with NodeJS.

* OOP (Object-oriented programming) module
* Big coverage of the Spotify API (18/84 endpoints - 21%)
* Non-dependant
* Built in TypeScript

# Installation
**Note**: *NodeJS 18.0.0 or newer is required*

```
npm install pointfy
git clone https://github.com/hbc-dev/pointfy.git
```

# Example usage
Get an album track list

```ts
import { Client } from "pointfy";

(async () => {
    const client = new Client({
        clientId: "123",
        clientSecret: "CLIENT_SUPER_SECRET"
    });

    let album = (await client.searchByName({
        name: "Whole Lotta Red",
        type: "album",
        limit: 1,
        query: {
            artist: "Playboi Carti"
        }
    })).albums.items[0];

    let tracks = await client.searchAlbumTracks({
        id: album.id
    });

    let list = tracks.items
    .map(track => `${track.track_number} ${track.name} - ${track.id}`).join('\n');

    console.log(`Found ${tracks.total} tracks.\n\n${list}`);
});
```

# Links
* [GitHub](https://github.com/hbc-dev/pointfy)
* [PayPal](https://paypal.me/pagos3217)
* [NPM](https://npmjs.com/package/pointfy)