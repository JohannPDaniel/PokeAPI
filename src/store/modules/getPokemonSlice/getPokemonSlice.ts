import { createSlice } from '@reduxjs/toolkit';
import { getPokemonAsyncThunk } from './getPokemon.action';
import { Result } from '../../../types/pokemon.types';

interface GetPokemonState {
	count: number;
	next: string | null;
	previous: string | null;
	results?: Array<Result>;
}

const initialState: GetPokemonState = {
	count: 0,
	next: null,
	previous: null, 
	results: [],
};

export const getPokemonSlice = createSlice({
	name: 'getPokemon',
	initialState,
	reducers: {
		clearState: (state) => {
			state.count = 0;
			state.next = null;
			state.previous = null;
			state.results = [];
		},
		addPokemon: (state, action) => {
			state.results?.push(action.payload);
		},
		updatePokemon: (state, action) => {
			const index = state.results?.findIndex(
				(pok) => pok.name === action.payload.name
			);
			if (index !== undefined && index >= 0 && state.results) {
				state.results[index] = action.payload;
			}
		},
		filterPokemon: (state, action) => {
			state.results = state.results?.filter((pok) =>
				pok.name.includes(action.payload)
			);
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getPokemonAsyncThunk.pending, (state) => {
				state.count = 0;
				state.next = null;
				state.previous = null;
				state.results = [];
			})
			.addCase(getPokemonAsyncThunk.fulfilled, (state, action) => {
				return {
					...state,
					...action.payload,
				};
			})
			.addCase(getPokemonAsyncThunk.rejected, (state) => {
				state.count = 0;
				state.next = null;
				state.previous = null;
				state.results = [];
			});
	},
});

export const { clearState, addPokemon, updatePokemon, filterPokemon } =
	getPokemonSlice.actions;
export const getPokemonReducer = getPokemonSlice.reducer;
