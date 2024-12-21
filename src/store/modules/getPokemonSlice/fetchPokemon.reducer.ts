import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PokemonDetailsTypes } from "../../../types/pokemonDetails.types";
import { fetchPokemonDataService } from "../../../config/services/fetchPokemon.service";

interface PokemonState {
	pokemonList: PokemonDetailsTypes[];
	pagination: {
		count: number;
		next: string | null;
		previous: string | null;
	};
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: PokemonState = {
	pokemonList: [],
	pagination: {
		count: 0,
		next: null,
		previous: null,
	},
	status: 'idle',
	error: null,
};

export const fetchPokemonData = createAsyncThunk(
	'pokemon/fetchPokemonData',
	async (url: string, { rejectWithValue }) => {
		try {
			const data = await fetchPokemonDataService(url);
			return data;
		} catch (error) {
			return rejectWithValue('Erro ao buscar dados dos Pokémons');
		}
	}
);

const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPokemonData.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(fetchPokemonData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.pokemonList = action.payload.pokemonDetails;
				state.pagination = action.payload.pagination;
			})
			.addCase(fetchPokemonData.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload as string;
			});
	},
});

export const pokemonReducer = pokemonSlice.reducer;
