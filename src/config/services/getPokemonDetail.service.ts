import {
	PokemonDetail,
	PokemonAbility,
	PokemonStat,
	PokemonSprites,
} from '../../types/pokemon.types';
import { api } from './api.service';

export async function getPokemonDetail(name: string): Promise<PokemonDetail> {
	try {
		const response = await api.get<{
			id: number;
			name: string;
			abilities: PokemonAbility[];
			stats: PokemonStat[];
			sprites: PokemonSprites;
		}>(`/pokemon/${name}`); 

		return {
			id: response.data.id,
			name: response.data.name,
			abilities: response.data.abilities.map((a) => a.ability.name),
			stats: response.data.stats.map((s) => ({
				name: s.stat.name,
				value: s.base_stat,
			})),
			sprite: response.data.sprites.front_default,
		};
	} catch (error) {
		console.error('Erro ao buscar detalhes do Pokémon:', error);
		throw error;
	}
}
