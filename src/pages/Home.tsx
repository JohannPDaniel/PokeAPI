import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { useEffect } from 'react';
import { getPokemonAsyncThunk } from "../store/modules/getPokemonSlice/getPokemon.action";

export const Home = () => {
	const dispatch = useAppDispatch();
	const getPokemon = useAppSelector( ( state ) => state.getPokemon );

	useEffect( () => {
		dispatch( getPokemonAsyncThunk() );
	}, [ dispatch ] );

	return (
		<Box>
			{ getPokemon.results && getPokemon.results.length > 0 ? (
				getPokemon.results.map( ( pok ) => <h1 key={ pok.name }>{ pok.name }</h1> )
			) : (
				<p>Carregando dados...</p>
			) }
		</Box>
	);
};
