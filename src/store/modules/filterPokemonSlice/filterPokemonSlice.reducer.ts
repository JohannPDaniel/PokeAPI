import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonDetailsTypes } from '../../../types/pokemonDetails.types';

interface FilterState {
	filteredPokemons: PokemonDetailsTypes[];
	searchTerm: string;
}

const initialState: FilterState = {
	filteredPokemons: [],
	searchTerm: '',
};

const filterPokemonSlice = createSlice({
	name: 'filterPokemon',
	initialState,
	reducers: {
		setSearchTerm(state, action: PayloadAction<string>) {
			state.searchTerm = action.payload;
		},
		setFilteredPokemons(state, action: PayloadAction<PokemonDetailsTypes[]>) {
			state.filteredPokemons = action.payload;
		},
	},
});

export const { setSearchTerm, setFilteredPokemons } =
	filterPokemonSlice.actions;
export const filterPokemonReducer = filterPokemonSlice.reducer;
