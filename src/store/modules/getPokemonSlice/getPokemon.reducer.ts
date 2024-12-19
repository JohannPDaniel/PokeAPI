import { createSlice } from '@reduxjs/toolkit';
import { getPokemonAsyncThunk } from './getPokemon.action';
import { Root } from '../../../types/pokemon.types';

const initialState: Root = {
	count: 0,
	next: null,
	previous: null,
	results: [],
};

export const getPokemonSlice = createSlice({
	name: 'getPokemon',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getPokemonAsyncThunk.fulfilled, (_, action) => {
			return action.payload;
		});
	},
});

export const getPokemonReducer = getPokemonSlice.reducer;
