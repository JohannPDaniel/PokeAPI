import { combineReducers } from '@reduxjs/toolkit';
import { getPokemonReducer } from "./getPokemonSlice/getPokemonSlice";
export const rootReducer = combineReducers({
	getPokemon: getPokemonReducer,
});
