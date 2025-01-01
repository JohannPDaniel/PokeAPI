import { Box, Button, Grid2, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import decoration1 from '../assets/decoration1.png';
import { useAppSelector } from '../store/hook';
import { GridBoxPokemonDetail } from '../components/PokemonDetails/GridBoxPokemonDetail';
import { Pokebola } from '../components/PokemonDetails/Pokebola';

export const PokemonDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const pokemon = useAppSelector((state) =>
		state.pokemon.allPokemons.find((poke) => poke.id === parseInt(id || '', 10))
	);
	const previousPageUrl = useAppSelector(
		(state) => state.pokemon.previousPageUrl
	);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const isSmallMobile = useMediaQuery('(max-width: 374px)');
	const isMediumMobile = useMediaQuery(
		'(min-width: 375px) and (max-width: 424px)'
	);
	const isLargeMobile = useMediaQuery(
		'(min-width: 425px) and (max-width: 767px)'
	);
	const isSmall = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
	const isMedium = useMediaQuery('(min-width: 1024px) and (max-width: 1439px)');
	const isLarge = useMediaQuery('(min-width: 1440px)');

	let gridText: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';

	switch (true) {
		case isSmallMobile:
			gridText = 'h6';
			break;
		case isMediumMobile:
			gridText = 'h5';
			break;
		case isLargeMobile:
			gridText = 'h5';
			break;
		case isSmall:
			gridText = 'h4';
			break;
		case isMedium:
			gridText = 'h4';
			break;
		case isLarge:
			gridText = 'h3';
			break;
		default:
			gridText = 'body2';
			break;
	}

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
				padding: { xs: 5, md: 7, lg: 10 },
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
							variant={gridText}
							textAlign={{ xs: 'center' }}>
							{pokemon.name}
							{isMobile && <Box component='br' />}{' '}
							| Nº 000{pokemon.id}
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
