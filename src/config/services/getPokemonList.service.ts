import { PokemonListResponse } from '../../types/pokemon.types';
import { api } from './api.service';

export async function getPokemonList(
	offset: number,
	limit: number
): Promise<PokemonListResponse> {
	try {
		const response = await api.get<PokemonListResponse>(
			`/pokemon?offset=${offset}&limit=${limit}`
		); 
		return response.data;
	} catch (error) {
		console.error('Erro ao buscar a lista de Pokémons:', error);
		throw error;
	}
}
