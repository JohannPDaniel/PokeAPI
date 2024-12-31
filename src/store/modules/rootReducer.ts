import { combineReducers } from '@reduxjs/toolkit';
import { pokemonReducer } from "./getPokemonSlice/fetchPokemon.reducer";
import { paginationReducer } from "./paginationSlice/paginationSlice.reducer";
import { filterPokemonReducer } from "./filterPokemonSlice/filterPokemonSlice.reducer";

export const rootReducer = combineReducers({
	pokemon: pokemonReducer,
	pagination: paginationReducer,
	filterPokemon: filterPokemonReducer,
});
