import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonDetailsTypes } from '../../../types/pokemonDetails.types';
import { fetchAllPokemons } from './fetchPokemon.action';

interface PokemonState {
	allPokemons: PokemonDetailsTypes[];
	filteredPokemons: PokemonDetailsTypes[];
	searchTerm: string;
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
	previousPageUrl: string | null; 
}

const initialState: PokemonState = {
	allPokemons: [],
	filteredPokemons: [],
	searchTerm: '',
	status: 'idle',
	error: null,
	previousPageUrl: null, 
};

const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {
		setSearchTerm(state, action: PayloadAction<string>) {
			state.searchTerm = action.payload;
			state.filteredPokemons = state.allPokemons.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(action.payload.toLowerCase())
			);
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
				state.filteredPokemons = action.payload;
			})
			.addCase(fetchAllPokemons.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message || 'Erro ao carregar Pokémon';
			});
	},
});

export const { setSearchTerm, setPreviousPageUrl } = pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;
