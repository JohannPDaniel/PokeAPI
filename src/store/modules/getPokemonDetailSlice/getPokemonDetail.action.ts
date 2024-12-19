import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonDetail } from '../../../config/services/getPokemonDetail.service';
import { PokemonDetail } from '../../../types/pokemon.types';

export const getPokemonDetailAsyncThunk = createAsyncThunk<
	PokemonDetail, 
	string 
>('getPokemonDetail/getPokemonDetailAsyncThunk', async (id) => {
	return await getPokemonDetail(id); 
});
