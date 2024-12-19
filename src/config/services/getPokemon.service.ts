import { Root } from '../../types/pokemon.types';
import { api } from './api.service';

export async function getPokemon(): Promise<Root> {
	try {
		const response = await api.get<Root>('/pokemon');
		return {
			count: response.data.count,
			next: response.data.next,
			previous: response.data.previous,
			results: response.data.results,
		};
	} catch (error: any) {
		console.error(error);
		return {
			count: 0,
			next: null,
			previous: null,
			results: [],
		};
	}
}
