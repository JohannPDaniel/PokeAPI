import {
	Backdrop,
	Box,
	Grid2,
	List,
	ListItem,
	ListItemText,
	TextField,
} from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { fetchAllPokemons } from '../store/modules/getPokemonSlice/fetchPokemon.action';
import { setSearchTerm } from '../store/modules/getPokemonSlice/fetchPokemon.reducer';
import { Pagination } from '../components/RenderPagination';
import pokebola from '../assets/pokebola.gif';

export const Home = () => {
	const dispatch = useAppDispatch();
	const { currentPagePokemons, searchTerm, status, error } = useAppSelector(
		(state) => state.pokemon
	);

	useEffect(() => {
		dispatch(fetchAllPokemons());
	}, [dispatch]);

	if (status === 'loading') {
		return (
			<Backdrop
				open={status === 'loading'}
				sx={{
					backgroundColor: 'rgba(255, 255, 0, 0.5)',
					backdropFilter: 'blur(8px)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<img
					src={pokebola}
					alt='Pokebola'
					style={{
						clipPath: 'circle(50%)',
					}}
				/>
			</Backdrop>
		);
	}
	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchTerm(event.target.value));
	};

	if (status === 'failed') {
		return <p>Erro: {error}</p>;
	}

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
			}}>
			<Grid2 container>
				<Grid2 size={12}>
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
					<List
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							flex: '1 1 auto',
						}}>
						{currentPagePokemons.map((pokemon) => (
							<ListItem key={pokemon.id}>
								<ListItemText
									primary={`${pokemon.name}`}
									secondary={`Altura: ${pokemon.height}, Peso: ${pokemon.weight}, Experiência: ${pokemon.base_experience}`}
								/>
							</ListItem>
						))}
					</List>
				</Grid2>
			</Grid2>

			<Box
				sx={{
					marginTop: 'auto',
					display: 'flex',
					justifyContent: 'center',
					padding: '20px',
				}}>
				<Pagination />
			</Box>
		</Box>
	);
};
