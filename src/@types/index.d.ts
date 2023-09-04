export * from "./Album";
export * from "./Artist";
export * from "./Track";
export * from "./Search";
export * from "./AudioBook";
export * from "./Chapter";
export * from "./Category";
export * from "./Episode";
export * from "./Show";
export * from "./Embed";


export type available_markets = "AD" | "AE" | "AG" | "AL" | "AM" | "AO" | "AR" | "AT" | "AU" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BN" | "BO" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CD" | "CG" | "CH" | "CI" | "CL" | "CM" | "CO" | "CR" | "CV" | "CW" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "ES" | "ET" | "FI" | "FJ" | "FM" | "FR" | "GA" | "GB" | "GD" | "GE" | "GH" | "GM" | "GN" | "GQ" | "GR" | "GT" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IN" | "IQ" | "IS" | "IT" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KR" | "KW" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MG" | "MH" | "MK" | "ML" | "MN" | "MO" | "MR" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NE" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NZ" | "OM" | "PA" | "PE" | "PG" | "PH" | "PK" | "PL" | "PS" | "PT" | "PW" | "PY" | "QA" | "RO" | "RS" | "RW" | "SA" | "SB" | "SC" | "SE" | "SG" | "SI" | "SK" | "SL" | "SM" | "SN" | "SR" | "ST" | "SV" | "SZ" | "TD" | "TG" | "TH" | "TJ" | "TL" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "US" | "UY" | "UZ" | "VC" | "VE" | "VN" | "VU" | "WS" | "XK" | "ZA" | "ZM" | "ZW";
export type available_genres = "acoustic" | "afrobeat" | "alt-rock" | "alternative" | "ambient" | "anime" | "black-metal" | "bluegrass" | "blues" | "bossanova" | "brazil" | "breakbeat" | "british" | "cantopop" | "chicago-house" | "children" | "chill" | "classical" | "club" | "comedy" | "country" | "dance" | "dancehall" | "death-metal" | "deep-house" | "detroit-techno" | "disco" | "disney" | "drum-and-bass" | "dub" | "dubstep" | "edm" | "electro" | "electronic" | "emo" | "folk" | "forro" | "french" | "funk" | "garage" | "german" | "gospel" | "goth" | "grindcore" | "groove" | "grunge" | "guitar" | "happy" | "hard-rock" | "hardcore" | "hardstyle" | "heavy-metal" | "hip-hop" | "holidays" | "honky-tonk" | "house" | "idm" | "indian" | "indie" | "indie-pop" | "industrial" | "iranian" | "j-dance" | "j-idol" | "j-pop" | "j-rock" | "jazz" | "k-pop" | "kids" | "latin" | "latino" | "malay" | "mandopop" | "metal" | "metal-misc" | "metalcore" | "minimal-techno" | "movies" | "mpb" | "new-age" | "new-release" | "opera" | "pagode" | "party" | "philippines-opm" | "piano" | "pop" | "pop-film" | "post-dubstep" | "power-pop" | "progressive-house" | "psych-rock" | "punk" | "punk-rock" | "r-n-b" | "rainy-day" | "reggae" | "reggaeton" | "road-trip" | "rock" | "rock-n-roll" | "rockabilly" | "romance" | "sad" | "salsa" | "samba" | "sertanejo" | "show-tunes" | "singer-songwriter" | "ska" | "sleep" | "songwriter" | "soul" | "soundtracks" | "spanish" | "study" | "summer" | "swedish" | "synth-pop" | "tango" | "techno" | "trance" | "trip-hop" | "turkish" | "work-out" | "world-music"

export interface ClientOptions {
    clientId: string;
    clientSecret: string;
}

export interface EmbedOptions {
    item_type: "album" | "artist" | "playlist" | "track" | "show" | "episode" | "audiobook";
    item_id: string;
}

export interface AccessToken {
    access_token: string;
    token_type: number;
    expires_in: number;
    expires_date: number;
}

export interface Images {
    url: string;
    height: number;
    width: number;
}

export interface Copyrights {
    text?: string;
    type?: string;
}