import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonDetailsTypes } from '../../../types/pokemonDetails.types';
import { fetchAllPokemons } from './fetchPokemon.action';

interface PokemonState {
	allPokemons: PokemonDetailsTypes[];
	searchTerm: string;
	previousPageUrl: string | null; // Adicionada a propriedade
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: PokemonState = {
	allPokemons: [],
	searchTerm: '',
	previousPageUrl: null, 
	status: 'idle',
	error: null,
};

const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {
		setSearchTerm(state, action: PayloadAction<string>) {
			state.searchTerm = action.payload;
		},
		setPreviousPageUrl(state, action: PayloadAction<string | null>) {
			state.previousPageUrl = action.payload; 
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllPokemons.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(fetchAllPokemons.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.allPokemons = action.payload;
			})
			.addCase(fetchAllPokemons.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload as string;
			});
	},
});

export const { setSearchTerm, setPreviousPageUrl } = pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;
