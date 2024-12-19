import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonDetail } from '../../../config/services/getPokemonDetail.service';
import { PokemonDetail } from '../../../types/pokemon.types';

export const getPokemonDetailAsyncThunk = createAsyncThunk<
	PokemonDetail, // Tipo de retorno
	string // Tipo do argumento (name)
>('getPokemonDetail/getPokemonDetailAsyncThunk', async (name: string) => {
	return await getPokemonDetail(name);
});
