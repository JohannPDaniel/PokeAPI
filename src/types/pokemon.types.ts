export interface PokemonListResult {
	name: string;
	url: string;
}

export interface PokemonListResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: PokemonListResult[];
}

export interface PokemonDetail {
	id: number;
	name: string;
	abilities: PokemonAbility[];
	stats: { name: string; value: number }[];
	sprite: string;
}

export interface PokemonAbility {
	ability: {
		name: string;
		url: string;
	};
}

export interface PokemonStat {
	stat: {
		name: string;
	};
	base_stat: number;
}

export interface PokemonSprites {
	front_default: string;
}