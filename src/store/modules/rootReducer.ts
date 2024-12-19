import { combineReducers } from '@reduxjs/toolkit';
import { getPokemonReducer } from './getPokemonSlice/getPokemon.reducer';
import { getPokemonDetailReducer } from "./getPokemonDetailSlice/getPokemonDetail.reducer";

export const rootReducer = combineReducers({
	getPokemon: getPokemonReducer,
	getPokemonDetail: getPokemonDetailReducer, 
});
