import { PokemonDetail } from "../../types/pokemon.types";
import { api } from "./api.service";

// Serviço
export async function getPokemonDetail(id: string): Promise<PokemonDetail> {
	try {
		console.log('Buscando detalhes para o Pokémon:', id);
		const response = await api.get(`/pokemon/${id}`);
		console.log('Detalhes do Pokémon recebidos:', response.data);
		return {
			id: response.data.id,
			name: response.data.name,
			sprite: response.data.sprites.front_default,
			abilities: response.data.abilities.map((a: any) => a.ability.name),
			stats: response.data.stats.map((s: any) => ({
				name: s.stat.name,
				value: s.base_stat,
			})),
		};
	} catch (error) {
		console.error('Erro ao buscar detalhes do Pokémon:', error);
		throw error;
	}
}
