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

// Tipo para sprites (imagens do Pokémon)
export interface PokemonSprites {
	front_default: string;
}

// Tipo para detalhes de um Pokémon
export interface PokemonDetail {
	id: number;
	name: string;
	abilities: string[];
	stats: { name: string; value: number }[];
	sprite: string;
}

// Tipo para a lista de Pokémons (paginada)
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
