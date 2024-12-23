import { Box, CircularProgress, Grid2, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { fetchAllPokemons } from '../store/modules/getPokemonSlice/fetchPokemon.action';
import { setSearchTerm } from '../store/modules/getPokemonSlice/fetchPokemon.reducer';
import { Pagination } from '../components/RenderPagination';

export const Home = () => {
	const dispatch = useAppDispatch();
	const { currentPagePokemons, searchTerm, status, error } = useAppSelector(
		(state) => state.pokemon
	);

	useEffect(() => {
		dispatch(fetchAllPokemons());
	}, [dispatch]);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchTerm(event.target.value));
	};

	if (status === 'loading') {
		return (
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100vh',
				}}>
				<CircularProgress
					variant='indeterminate'
					thickness={5}
					size='4rem'
				/>
			</Box>
		);
	}

	if (status === 'failed') {
		return <p>Erro: {error}</p>;
	}

	return (
		<Grid2 container>
			<Grid2
				size={12}
				sx={{
					
				}}>
				<h1>Lista de Pokémons</h1>

				<Box
					sx={{
						marginBottom: '20px',
					}}>
					<TextField
						type='text'
						placeholder='Pesquise um Pokémon'
						value={searchTerm}
						onChange={handleSearchChange}
						style={{
							padding: '10px',
							width: '100%',
						}}
					/>
				</Box>

				<ol
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					{currentPagePokemons.map((pokemon) => (
						<li key={pokemon.id}>
							<strong>{pokemon.name}</strong> - Altura: {pokemon.height}, Peso:{' '}
							{pokemon.weight}, Experiência: {pokemon.base_experience}
						</li>
					))}
				</ol>
				<Pagination />
			</Grid2>
		</Grid2>
	);
};
{
	/* <div style={{ display: 'flex', gap: '5px', marginTop: '20px' }}>
	{renderPagination(pagination, handlePageChange, searchTerm)}
</div> */
}
