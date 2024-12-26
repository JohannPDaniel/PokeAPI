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
	const { currentPagePokemons, searchTerm, status, error } = useAppSelector(
		(state) => state.pokemon
	);

	useEffect(() => {
		dispatch(fetchAllPokemons());
	}, [dispatch]);

	// Tela de carregamento
	if (status === 'loading') {
		return (
			<Backdrop
				open={status === 'loading'}
				sx={{
					backgroundColor: 'rgba(255, 255, 0, 0.5)',
					backdropFilter: 'blur(18px)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					zIndex: 999,
				}}>
				<img
					src={pokebola}
					alt='Pokebola'
					style={{
						clipPath: 'circle(50%)',
						zIndex: 999,
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
				height: 'auto',
				backgroundImage: `url(${wallpaper})`,
				backgroundSize: 'cover',
				backgroundPosition: 'start',
				backgroundRepeat: 'no-repeat',
			}}>
			<Grid2
				container
				spacing={2}>
				<Grid2
					size={12}
					sx={{
						display: 'flex',
						flexDirection: 'column',
					}}>
					<Box
						component='img'
						src={pokemon}
						alt='pokemon'
						sx={style}
					/>
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
					<Grid2
						container
						mx={2}
						spacing={2}>
						{/* Define o tamanho dos cartões em diferentes breakpoints */}
						{Array.from({ length: 10 }).map((_, index) => (
							<Grid2
								key={index} // Adicionado para evitar erros de chave
								size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}
							>
								<CardPokemon
									description='descrição'
									image=''
									name='Nome'
								/>
							</Grid2>
						))}
					</Grid2>

					{/* <List
						sx={{
							display: 'flex',
							flexDirection: 'column',
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
					</List> */}
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
