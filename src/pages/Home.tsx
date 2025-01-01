import { Grid2 } from '@mui/material';
import { useEffect } from 'react';
import { BackdropMui } from '../components/Home/BackdropMui';
import { GridContentHome } from '../components/Home/GridContentHome';
import { Pagination } from '../components/Home/Pagination';
import { style } from '../components/Home/style';
import { useHome } from '../config/hooks/useHome';
import { fetchAllPokemons } from '../store/modules/getPokemonSlice/fetchPokemon.action';

export const Home = () => {
	const { dispatch, status, error, totalPages, currentPage, allPokemons } =
		useHome();

	useEffect(() => {
		if (currentPage > totalPages) {
			dispatch({ type: 'pagination/setPage', payload: 1 });
		}
	}, [currentPage, totalPages, dispatch]);

	useEffect(() => {
		document.title = 'Página Inicial - Pokémon';
		if (allPokemons.length === 0) {
			dispatch(fetchAllPokemons());
		}
	}, [dispatch, allPokemons.length]);

	if (status === 'loading') {
		return <BackdropMui />;
	}

	if (status === 'failed') {
		return <p>Erro: {error}</p>;
	}

	return (
		<Grid2
			container
			sx={{ background: 'linear-gradient(to left, #ff9800, #ff9800)' }}>
			<Grid2
				size={12}
				sx={style.wallPaper}>
				<Grid2 container>
					<GridContentHome />
				</Grid2>
				<Grid2
					size={12}
					sx={style.pagination}>
					<Pagination />
				</Grid2>
			</Grid2>
		</Grid2>
	);
};
