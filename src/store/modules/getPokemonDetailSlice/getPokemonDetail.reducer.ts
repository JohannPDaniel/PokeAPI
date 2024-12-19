import { createSlice } from '@reduxjs/toolkit';
import { getPokemonDetailAsyncThunk } from './getPokemonDetail.action';
import { PokemonDetail } from '../../../types/pokemon.types';

interface PokemonDetailState {
	loading: boolean;
	error: boolean;
	data: PokemonDetail | null;
}

const initialState: PokemonDetailState = {
	loading: false,
	error: false,
	data: null,
};

export const getPokemonDetailSlice = createSlice({
	name: 'pokemonDetail',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPokemonDetailAsyncThunk.pending, (state) => {
				state.loading = true;
				state.error = false;
				state.data = null;
			})
			.addCase(getPokemonDetailAsyncThunk.fulfilled, (state, action) => {
				state.loading = false;
				state.error = false;
				state.data = action.payload;
			})
			.addCase(getPokemonDetailAsyncThunk.rejected, (state) => {
				state.loading = false;
				state.error = true;
				state.data = null;
			});
	},
});

export const getPokemonDetailReducer = getPokemonDetailSlice.reducer;
