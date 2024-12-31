import { Backdrop, Box, Grid2, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { fetchAllPokemons } from '../store/modules/getPokemonSlice/fetchPokemon.action';
import { setSearchTerm } from '../store/modules/getPokemonSlice/fetchPokemon.reducer';
import { Pagination } from '../components/RenderPagination';
import pokemons from '../assets/pokemons.gif';
import pokemon from '../assets/pokemon.png';
import wallpaper from '../assets/wallpaper.png';
import { CardPokemon } from '../components/CardPokemon';

const style = {
	width: '100%',
	maxWidth: 300,
	alignSelf: 'center',
	marginBlock: 3,
	animation: 'pulse 1.3s infinite',
	'@keyframes pulse': {
		'0%': { transform: 'scale(1)' },
		'50%': { transform: 'scale(1.3)' },
		'100%': { transform: 'scale(1)' },
	},
};

export const Home = () => {
	const dispatch = useAppDispatch();
	const { allPokemons, searchTerm, status, error } = useAppSelector(
		(state) => state.pokemon
	);
	const { currentPage, itemsPerPage } = useAppSelector(
		(state) => state.pagination
	);

	// Aplica o filtro ao conjunto completo de Pokémon
	const filteredPokemonsList = searchTerm
		? allPokemons.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
		  )
		: allPokemons;

	// Recalcula o total de páginas
	const totalPages = Math.ceil(filteredPokemonsList.length / itemsPerPage);

	// Corrige a página atual se ela ultrapassar o total de páginas
	useEffect(() => {
		if (currentPage > totalPages) {
			dispatch({ type: 'pagination/setPage', payload: 1 });
		}
	}, [currentPage, totalPages, dispatch]);

	// Determina os Pokémon exibidos na página atual
	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentPagePokemons = filteredPokemonsList.slice(
		startIndex,
		startIndex + itemsPerPage
	);

	// Carrega todos os Pokémon na montagem do componente
	useEffect(() => {
		document.title = 'Página Inicial - Pokémon';
		if (allPokemons.length === 0) {
			dispatch(fetchAllPokemons());
		}
	}, [dispatch, allPokemons.length]);

	// Lida com a alteração de pesquisa
	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchTerm(event.target.value)); // Atualiza o termo de busca no estado global
	};

	if (status === 'loading') {
		return (
			<Backdrop
				open
				sx={{
					backgroundColor: 'rgba(255, 255, 0, 0.5)',
					backdropFilter: 'blur(18px)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					zIndex: 999,
				}}>
				<img
					src={pokemons}
					alt='Carregando Pokémons'
					style={{
						clipPath: 'circle(14%)',
						zIndex: 999,
					}}
				/>
			</Backdrop>
		);
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
				sx={{
					height: 'auto',
					minHeight: '100vh',
					backgroundImage: `url(${wallpaper})`,
					backgroundSize: 'contain',
					backgroundPosition: 'bottom',
					backgroundRepeat: 'no-repeat',
				}}>
				<Grid2 container>
					<Grid2
						size={12}
						sx={{
							display: 'flex',
							flexDirection: 'column',
						}}>
						<Grid2
							size={12}
							sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
							<Box
								component='img'
								src={pokemon}
								alt='Pokémon'
								sx={style}
							/>
						</Grid2>
						<Grid2
							size={{ xs: 12 }}
							sx={{
								display: 'flex',
								px: { xs: 8, sm: 6, md: 3, lg: 22 },
							}}>
							<TextField
								fullWidth
								type='text'
								placeholder='Pesquise um Pokémon'
								value={searchTerm}
								onChange={handleSearchChange}
								sx={{
									padding: '10px',
								}}
							/>
						</Grid2>
						<Grid2
							container
							spacing={4}
							sx={{
								display: 'flex',
								justifyContent: 'center',
								padding: { xs: 6, sm: 8, md: 4, lg: 2 },
							}}>
							{currentPagePokemons.length > 0 ? (
								currentPagePokemons.map((pokemon) => (
									<Grid2
										key={pokemon.id}
										size={{ xs: 10, sm: 6, md: 6, lg: 4 }}>
										<CardPokemon
											types={pokemon.types}
											id={pokemon.id}
											name={pokemon.name}
											weight={pokemon.weight}
											image={
												pokemon.sprites.other['official-artwork'].front_default
											}
										/>
									</Grid2>
								))
							) : (
								<p>Nenhum Pokémon encontrado.</p>
							)}
						</Grid2>
					</Grid2>
				</Grid2>
				<Grid2
					size={12}
					sx={{
						pb: { xs: 16, sm: 28, md: 22, lg: 30 },
						pt: 6,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<Pagination />
				</Grid2>
			</Grid2>
		</Grid2>
	);
};
