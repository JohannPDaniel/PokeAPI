export interface PokemonDetailsTypes {
	id: number;
	name: string;
	height: number;
	weight: number;
	stats: Stat[];
	base_experience: number;
	abilities: Ability[];
	sprites: Sprites;
	types: Type[];
	species: Species;
}

export interface Ability {
	ability: Ability2;
}

export interface Ability2 {
	name: string;
	url: string;
}

export interface Stat {
	base_stat: number;
	effort: number;
	stat: Stat2;
}

export interface Stat2 {
	name: string;
	url: string;
}

export interface Type {
	slot?: number;
	type: Type2;
}

export interface Type2 {
	name: string;
	url?: string;
}

export interface Species {
	name: string;
	url: string;
}

export interface Sprites {
	back_default: string;
	back_female: any;
	back_shiny: string;
	back_shiny_female: any;
	front_default: string;
	front_female: any;
	front_shiny: string;
	front_shiny_female: any;
	other: Other;
}

export interface Other {
	dream_world: DreamWorld;
	home: Home;
	'official-artwork': OfficialArtwork;
	showdown: Showdown;
}

export interface DreamWorld {
	front_default: string;
	front_female: any;
}

export interface Home {
	front_default: string;
	front_female: any;
	front_shiny: string;
	front_shiny_female: any;
}

export interface OfficialArtwork {
	front_default: string;
	front_shiny: string;
}


export interface Showdown {
	back_default: string;
	back_female: any;
	back_shiny: string;
	back_shiny_female: any;
	front_default: string;
	front_female: any;
	front_shiny: string;
	front_shiny_female: any;
}
