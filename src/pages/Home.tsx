import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { getPokemonAsyncThunk } from '../store/modules/getPokemonSlice/getPokemon.action';

export const Home = () => {
	const dispatch = useAppDispatch();
	const pokemonList = useAppSelector((state) => state.getPokemon);

	useEffect(() => {
		dispatch(getPokemonAsyncThunk());
	}, [dispatch]);

	return (
		<Box>
			{pokemonList.results?.map((pokemon) => (
				<Box key={pokemon.name}>
					<h2>{pokemon.name}</h2>
					<Link to={`/pokemon/${pokemon.name}`}>Ver Detalhes</Link>
				</Box>
			))}
		</Box>
	);
};
