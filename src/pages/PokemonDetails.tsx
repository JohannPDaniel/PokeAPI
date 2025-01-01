import {
	Button,
	Grid2,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import decoration1 from '../assets/decoration1.png';
import { useAppSelector } from '../store/hook';
import { GridBoxPokemonDetail } from '../components/PokemonDetails/GridBoxPokemonDetail';
import { Pokebola } from '../components/PokemonDetails/Pokebola';

export const PokemonDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
	const pokemon = useAppSelector((state) =>
		state.pokemon.allPokemons.find((poke) => poke.id === parseInt(id || '', 10))
	);
	const previousPageUrl = useAppSelector(
		(state) => state.pokemon.previousPageUrl
	);

	const handleBack = () => {
		if (previousPageUrl) {
			navigate(previousPageUrl);
		} else {
			navigate('/');
		}
	};

	if (!pokemon) {
		return <Typography variant='h6'>Pokémon não encontrado.</Typography>;
	}

	useEffect(() => {
		document.title = `${pokemon.name} | Pokedex`;
	}, []);

	return (
		<Grid2
			container
			sx={{
				width: '100%',
				minHeight: '100vh',
				padding: { xs: 5, sm: 5 },
				overflow: 'hidden',
				backgroundColor: '#000',
			}}>
			<Grid2
				size={12}
				sx={{
					width: '100%',
					minHeight: '100vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					backgroundColor: 'white',
					borderRadius: 5,
					overflow: 'hidden',
				}}>
				<Grid2 container>
					<Grid2
						size={12}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							mt: 2,
						}}>
						<Typography
							variant={isSmallScreen ? 'h4' : isMediumScreen ? 'h3' : 'h2'}
							textAlign={{ xs: 'center' }}>
							{pokemon.name} | Nº 000{pokemon.id}
						</Typography>
					</Grid2>
				</Grid2>
				<Grid2 container>
					<Grid2
						size={12}
						sx={{
							width: '100%',
							height: 'auto',
							display: 'flex',
						}}>
						<Grid2 container>
							<Grid2
								size={{ xs: 0 }}
								component='img'
								src={decoration1}
								alt='decoração 2'
								sx={{
									width: { md: '150px', lg: '200px' },
									display: { xs: 'none', md: 'block' },
								}}
							/>
						</Grid2>
						<Grid2
							container
							sx={{
								width: '100%',
							}}>
							{/* Caixas */}
							<GridBoxPokemonDetail />
							<Grid2
								size={12}
								sx={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									py: 3,
								}}>
								<Button
									variant='contained'
									onClick={handleBack}>
									Voltar
								</Button>
							</Grid2>
						</Grid2>
						<Grid2 container>
							<Grid2
								component='img'
								src={decoration1}
								alt='decoração 2'
								sx={{
									width: { md: '150px', lg: '200px' },
									display: { xs: 'none', md: 'block' },
								}}
							/>
						</Grid2>
					</Grid2>
				</Grid2>
				{/* Pokebola girando */}
				<Pokebola />
			</Grid2>
		</Grid2>
	);
};
