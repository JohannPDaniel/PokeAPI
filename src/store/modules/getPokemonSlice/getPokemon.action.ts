// src/store/modules/getPokemonSlice/getPokemon.action.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon } from '../../../config/services/getPokemon.service';

export const getPokemonAsyncThunk = createAsyncThunk(
	'getPokemon/getPokemonAsyncThunk',
	async () => {
		const response = await getPokemon();
		return response;
	}
);
