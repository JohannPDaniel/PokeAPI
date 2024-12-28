import { Box, Grid2, Typography, useMediaQuery, useTheme } from '@mui/material';
import pokebolaGirando from '../assets/pokebolaGirando.gif';
import { useEffect } from 'react';
import { useAppSelector } from '../store/hook';
import nextPage from '../assets/nextPage.png';
import decoration1 from '../assets/decoration1.png';

export const PokemonDetails = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
	const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
	const { currentPagePokemons, searchTerm, status, error } = useAppSelector(
		(state) => state.pokemon
	);

	const imageSize = (() => {
		switch (true) {
			case isSmallScreen:
				return 100;
			case isMediumScreen:
				return 150;
			case isLargeScreen:
				return 200;
			default:
				return 300;
		}
	})();

	useEffect(() => {
		document.title = 'Detalhes do pokemon';
	}, []);

	return (
		<Grid2
			container
			sx={{
				width: '100%',
				height: '100%',
			}}>
			<Grid2
				size={12}
				sx={{
					height: 'auto',
					minHeight: '100vh',
					backgroundColor: '#000',
					display: 'flex',
					padding: 10,
					overflow: 'hidden',
				}}>
				<Box
					sx={{
						width: '100%',
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						backgroundColor: 'white',
						borderRadius: 5,
						position: 'relative',
						overflow: 'hidden',
					}}>
					<Box sx={{width: "100%", display: "flex", gap: 0.5}}>
						<Box
							component='img'
							src={nextPage}
							alt='Imagem invertida'
							sx={{
								width: '50%',
								height: '100%',
								objectFit: 'cover',
								transform: 'scaleX(-1)',
								borderTopRightRadius: 10,
								cursor: 'pointer',
								pointerEvents: 'auto',
								'&:hover': {
									filter:
										'grayscale(0) sepia(1) hue-rotate(190deg) saturate(1500%)',
								},
							}}
						/>
						<Box
							component='img'
							src={nextPage}
							alt='Imagem normal'
							sx={{
								width: '50%',
								height: '100%',
								objectFit: 'cover',
								borderStartEndRadius: 10,
								cursor: 'pointer',
								pointerEvents: 'auto',

								'&:hover': {
									filter:
										'grayscale(0) sepia(1) hue-rotate(190deg) saturate(1500%)',
								},
							}}
						/>
					</Box>
					<Typography
						variant='h3'
						sx={{ position: 'absolute', top: 90 }}>
						Venusaur Nº 0003
					</Typography>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
							height: '100%',
						}}>
						<Box
							component='img'
							src={decoration1}
							alt='decoração 1'
							sx={{
								width: '200px',
							}}
						/>

						<Box
							component='img'
							src={decoration1}
							alt='decoração 2'
							sx={{
								width: '200px',
							}}
						/>
					</Box>
				</Box>
				<img
					src={pokebolaGirando}
					alt='pokebola girando'
					style={{
						clipPath: 'circle(30%)',
						width: imageSize,
						position: 'fixed',
						bottom: 0,
						right: 0,
					}}
				/>
			</Grid2>
		</Grid2>
	);
};
