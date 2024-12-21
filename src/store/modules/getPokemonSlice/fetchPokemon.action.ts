import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPokemonDataService } from '../../../config/services/fetchPokemon.service';

export const fetchPokemonData = createAsyncThunk(
	'pokemon/fetchPokemonData',
	async (url: string = '/pokemon?offset=0&limit=20') => {
		const data = await fetchPokemonDataService(url);
		return data;
	}
);
