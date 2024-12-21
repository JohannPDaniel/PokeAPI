import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchPokemonDataService } from '../../../config/services/fetchPokemon.service';
import { PokemonDetailsTypes } from '../../../types/pokemonDetails.types';

interface PokemonState {
	allPokemons: PokemonDetailsTypes[]; // Todos os Pokémons
	filteredPokemons: PokemonDetailsTypes[]; // Pokémons após a filtragem
	currentPagePokemons: PokemonDetailsTypes[]; // Pokémons da página atual
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
		itemsPerPage: 10, // Quantidade de Pokémons por página
	},
	searchTerm: '',
	status: 'idle',
	error: null,
};

// Thunk para buscar todos os Pokémons
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
		} catch (error) {
			return rejectWithValue('Erro ao buscar todos os Pokémons');
		}
	}
);

const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {
		setSearchTerm(state, action: PayloadAction<string>) {
			state.searchTerm = action.payload;

			if (!action.payload.trim()) {
				state.filteredPokemons = state.allPokemons; // Reseta a lista filtrada
			} else {
				state.filteredPokemons = state.allPokemons.filter((pokemon) =>
					pokemon.name.toLowerCase().includes(action.payload.toLowerCase())
				);
			}

			// Recalcular a paginação
			state.pagination.totalPages = Math.ceil(
				state.filteredPokemons.length / state.pagination.itemsPerPage
			);

			// Reinicia para a primeira página após a pesquisa
			state.pagination.currentPage = 1;

			state.currentPagePokemons = state.filteredPokemons.slice(
				0,
				state.pagination.itemsPerPage
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
				state.allPokemons = action.payload;
				state.filteredPokemons = action.payload;
				state.pagination.totalPages = Math.ceil(
					action.payload.length / state.pagination.itemsPerPage
				);

				// Inicializar com a primeira página
				state.currentPagePokemons = action.payload.slice(
					0,
					state.pagination.itemsPerPage
				);
			})
			.addCase(fetchAllPokemons.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload as string;
			});
	},
});

export const { setSearchTerm, setPage } = pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;
