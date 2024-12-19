import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon } from "../../../config/services/auth.service";

export const getPokemonAsyncThunk = createAsyncThunk(
	'getPokemon/getPokemonAsyncThunk',
	async () => {
		const response = await getPokemon();
		console.log('Resposta da API no asyncThunk:', response);

		// Retorne um objeto consistente
		return {
			count: response.count ?? 0,
			next: response.next ?? null,
			previous: response.previous ?? null,
			results: response.results ?? [],
		};
	}
);
