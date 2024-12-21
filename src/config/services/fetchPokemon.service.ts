import { PokemonApiResponseTypes } from '../../types/pokemonApiResponse.types';
import { PokemonDetailsTypes } from '../../types/pokemonDetails.types';
import { api } from './api.service';

export interface CombinedPokemonData {
	pagination: PokemonApiResponseTypes;
	pokemonDetails: PokemonDetailsTypes[];
}

export async function fetchPokemonDataService(
	url?: string
): Promise<CombinedPokemonData> {
	const defaultUrl = `/pokemon?offset=0&limit=10`;
	const fetchUrl = url || defaultUrl;

	try {
		const response = await api.get<PokemonApiResponseTypes>(fetchUrl);

		if (!response.data || !response.data.results) {
			throw new Error('Dados inválidos retornados pela API');
		}

		const pokemonUrls = response.data.results.map((pokemon) => pokemon.url);

		const pokemonDetails = await Promise.all(
			pokemonUrls.map(async (url) => {
				const response = await api.get<PokemonDetailsTypes>(url);
				return response.data;
			})
		);
		
		return {
			pagination: {
				count: response.data.count,
				next: response.data.next,
				previous: response.data.previous,
			},
			pokemonDetails,
		};
	} catch (error) {
		console.error('Erro ao buscar dados:', error);
		return {
			pagination: {
				count: 0,
				next: null,
				previous: null,
			},
			pokemonDetails: [],
		};
	}
}
