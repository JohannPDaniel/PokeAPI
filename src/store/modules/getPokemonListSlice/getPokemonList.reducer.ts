import { createSlice } from '@reduxjs/toolkit';
import { getPokemonListAsyncThunk } from './getPokemonList.action';
import { PokemonListResponse } from '../../../types/pokemon.types';

interface PokemonListState {
	loading: boolean;
	error: boolean;
	data: PokemonListResponse | null;
}

const initialState: PokemonListState = {
	loading: false,
	error: false,
	data: null,
};

export const pokemonListSlice = createSlice({
	name: 'pokemonList',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPokemonListAsyncThunk.pending, (state) => {
				state.loading = true;
				state.error = false;
				state.data = null;
			})
			.addCase(getPokemonListAsyncThunk.fulfilled, (state, action) => {
				state.loading = false;
				state.error = false;
				state.data = action.payload;
			})
			.addCase(getPokemonListAsyncThunk.rejected, (state) => {
				state.loading = false;
				state.error = true;
				state.data = null;
			});
	},
});

export const pokemonListReducer = pokemonListSlice.reducer;
