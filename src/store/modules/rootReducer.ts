import { combineReducers } from '@reduxjs/toolkit';
import { pokemonReducer } from "./getPokemonSlice/fetchPokemon.reducer";

export const rootReducer = combineReducers({
	pokemon: pokemonReducer,
});
