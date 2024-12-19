import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonList } from '../../../config/services/getPokemonList.service';
import { PokemonListResponse } from '../../../types/pokemon.types';

export const getPokemonListAsyncThunk = createAsyncThunk<
	PokemonListResponse, 
	{ offset: number; limit: number } 
>('getPokemonList/getPokemonListAsyncThunk', async ({ offset, limit }) => {
	return await getPokemonList(offset, limit); 
});
