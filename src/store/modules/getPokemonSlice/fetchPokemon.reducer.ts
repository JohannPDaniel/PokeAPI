import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonDetailsTypes } from '../../../types/pokemonDetails.types';
import { fetchAllPokemons } from './fetchPokemon.action';

interface PokemonState {
	allPokemons: PokemonDetailsTypes[];
	filteredPokemons: PokemonDetailsTypes[];
	currentPagePokemons: PokemonDetailsTypes[];
	pagination: {
		totalPages: number;
		currentPage: number;
		itemsPerPage: number;
	};
	searchTerm: string; // Termo de pesquisa
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: PokemonState = {
	allPokemons: [],
	filteredPokemons: [],
	currentPagePokemons: [],
	pagination: {
		totalPages: 0,
		currentPage: 1,
		itemsPerPage: 6,
	},
	searchTerm: '',
	status: 'idle',
	error: null,
};

const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {
		setSearchTerm(state, action: PayloadAction<string>) {
			state.searchTerm = action.payload;

			if (!action.payload.trim()) {
				state.filteredPokemons = state.allPokemons;
			} else {
				state.filteredPokemons = state.allPokemons.filter((pokemon) =>
					pokemon.name.toLowerCase().includes(action.payload.toLowerCase())
				);
			}

			state.pagination.totalPages = Math.ceil(
				state.filteredPokemons.length / state.pagination.itemsPerPage
			);

			state.pagination.currentPage = 1;

			const startIndex = 0;
			const endIndex = Math.min(
				state.filteredPokemons.length,
				state.pagination.itemsPerPage
			);

			state.currentPagePokemons = state.filteredPokemons.slice(
				startIndex,
				endIndex
			);
		},

		setPage(state, action: PayloadAction<number>) {
			const page = action.payload;
			const startIndex = (page - 1) * state.pagination.itemsPerPage;
			const endIndex = startIndex + state.pagination.itemsPerPage;

			state.pagination.currentPage = page;
			state.currentPagePokemons = state.filteredPokemons.slice(
				startIndex,
				endIndex
			);
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

				if (action.payload?.entities?.pokemon) {
					state.allPokemons = Object.values(action.payload.entities.pokemon);
					state.filteredPokemons = Object.values(
						action.payload.entities.pokemon
					);
					state.pagination.totalPages = Math.ceil(
						state.filteredPokemons.length / state.pagination.itemsPerPage
					);
					state.currentPagePokemons = state.filteredPokemons.slice(
						0,
						state.pagination.itemsPerPage
					);
				} else {
					state.allPokemons = [];
					state.filteredPokemons = [];
					state.currentPagePokemons = [];
					state.pagination.totalPages = 0;
				}
			})
			.addCase(fetchAllPokemons.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload as string;
			});
	},
});

export const { setSearchTerm, setPage } = pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;
