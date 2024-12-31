import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPokemonDataService } from '../../../config/services/fetchPokemon.service';
import { PokemonDetailsTypes } from "../../../types/pokemonDetails.types";

export const fetchAllPokemons = createAsyncThunk(
	'pokemon/fetchAllPokemons',
	async (_, { rejectWithValue }) => {
		try {
			let nextUrl: string | null = '/pokemon?offset=0&limit=100';
			const allPokemonDetails: PokemonDetailsTypes[] = [];

			while (nextUrl) {
				const data = await fetchPokemonDataService(nextUrl);
				allPokemonDetails.push(...data.pokemonDetails);
				nextUrl = data.pagination.next;
			}

			return allPokemonDetails; 
		} catch (error: any) {
			return rejectWithValue(
				error.message || 'Erro ao buscar todos os Pokémons'
			);
		}
	}
);
