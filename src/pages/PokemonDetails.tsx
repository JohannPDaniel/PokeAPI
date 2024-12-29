import { Box, Grid2, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useEffect } from 'react';
import decoration1 from '../assets/decoration1.png';
import nextPage from '../assets/nextPage.png';
import pokebolaGirando from '../assets/pokebolaGirando.gif';
import { useAppSelector } from '../store/hook';

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
				minHeight: '100vh',
				padding: 10,
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
							gap: 0.5,
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<Box
							component='img'
							src={nextPage}
							alt='Imagem invertida'
							sx={{
								height: '100%',
								width: '50%',
								objectFit: 'cover',
								transform: 'scaleX(-1)',
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
								height: '100%',
								width: '50%',
								objectFit: 'cover',
								cursor: 'pointer',
								pointerEvents: 'auto',
								'&:hover': {
									filter:
										'grayscale(0) sepia(1) hue-rotate(190deg) saturate(1500%)',
								},
							}}
						/>
					</Grid2>
				</Grid2>
				<Grid2 container>
					<Grid2
						size={12}
						sx={{ position: 'relative' }}>
						<Typography
							variant='h3'
							sx={{ position: 'absolute', left: '35%', bottom: '0px' }}>
							Venusaur Nº 0003
						</Typography>
					</Grid2>
				</Grid2>
				<Grid2
					container
					>
					<Grid2
						size={12}
						sx={ {
							width: "100%",
							height: "auto",
							display: 'flex',
							justifyContent: 'space-between',
							position: 'relative',
						}}>
						<Box
							component='img'
							src={decoration1}
							alt='decoração 1'
							sx={{
								width: '200px',
							}}
						/>
						<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
							<Typography variant='h1'>Olá</Typography>
						</Box>
						<Box
							component='img'
							src={decoration1}
							alt='decoração 2'
							sx={{
								width: '200px',
							}}
						/>
					</Grid2>
				</Grid2>
			</Grid2>
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
	);
};
