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
				<Grid2 container>
					<Grid2
						size={12}
						sx={{
							width: '100%',
							height: 'auto',
							display: 'flex',
						}}>
						<Box
							component='img'
							src={decoration1}
							alt='decoração 1'
							sx={{
								width: '200px',
							}}
						/>
						<Grid2
							container
							sx={{
								width: '100%',
							}}>
							<Grid2 size={12}>
								<Grid2 container>
									{/* Caixa 1 */}
									<Grid2
										size={6}
										sx={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											padding: 3,
										}}>
										<Box
											sx={{
												width: '100%',
												height: '100%',
												backgroundColor: '#eaeaea',
												borderRadius: 2,
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
											}}>
											Foto do Pokemon
										</Box>
									</Grid2>
									{/* Caixa 2 */}
									<Grid2
										size={6}
										sx={{
											display: 'flex',
											flexDirection: 'column',
											padding: 3,
										}}>
										<Grid2
											container
											sx={{
												display: 'flex',
												flexDirection: 'column',
												gap: 3,
												backgroundColor: '#eaeaea',
												padding: 3,
												borderRadius: 2,
											}}>
											<Grid2
												size={7}
												sx={{
													display: 'flex',
													justifyContent: 'space-between',
												}}>
												<Box>
													<Typography>Height</Typography>
													<Typography>0.7 m</Typography>
												</Box>
												<Box>
													<Typography>Category</Typography>
													<Typography>Seed</Typography>
												</Box>
											</Grid2>
											<Grid2
												size={7}
												sx={{
													display: 'flex',
													justifyContent: 'space-between',
												}}>
												<Box>
													<Typography>Weight</Typography>
													<Typography>6.9 kg</Typography>
												</Box>
												<Box>
													<Typography>Abilities</Typography>
													<Typography>Overgrow</Typography>
												</Box>
											</Grid2>
											<Grid2
												size={12}
												sx={{
													display: 'flex',
													justifyContent: 'flex-start',
												}}>
												<Box>
													<Typography>Gender</Typography>
													<Typography>Male</Typography>
												</Box>
											</Grid2>
										</Grid2>
									</Grid2>
									{/* Caixa 3 */}
									<Grid2
										size={6}
										sx={{
											display: 'flex',
											flexDirection: 'column',
											padding: 3,
										}}>
										<Grid2
											container
											sx={{
												display: 'flex',
												flexDirection: 'column',
												gap: 1,
												backgroundColor: '#eaeaea',
												padding: 3,
												borderRadius: 2,
											}}>
											<Grid2 size={12}>
												<Typography variant='h6'>Stats</Typography>
											</Grid2>
											{[
												{ label: 'HP', value: 50 },
												{ label: 'Attack', value: 70 },
												{ label: 'Defense', value: 60 },
												{ label: 'Special Attack', value: 80 },
												{ label: 'Special Defense', value: 75 },
												{ label: 'Speed', value: 90 },
											].map((stat, index) => (
												<Grid2
													key={index}
													size={12}
													sx={{
														display: 'flex',
														alignItems: 'center',
														gap: 1,
													}}>
													<Typography sx={{ width: '100px' }}>
														{stat.label}
													</Typography>
													<Box
														sx={{
															flexGrow: 1,
															height: '15px',
															backgroundColor: '#fff',
															border: '1px solid #ccc',
															borderRadius: '5px',
															overflow: 'hidden',
															position: 'relative',
														}}>
														<Box
															sx={{
																height: '100%',
																width: `${stat.value}%`,
																backgroundColor: '#30a7d7',
															}}
														/>
													</Box>
													<Typography
														sx={{ width: '50px', textAlign: 'right' }}>
														{stat.value}
													</Typography>
												</Grid2>
											))}
										</Grid2>
									</Grid2>
									{/* Caixa 4 */}
									<Grid2
										size={6}
										sx={{
											display: 'flex',
											flexDirection: 'column',
											padding: 3,
										}}>
										<Grid2
											container
											sx={{
												display: 'flex',
												flexDirection: 'column',
												gap: 3,
												backgroundColor: '#eaeaea',
												padding: 3,
												borderRadius: 2,
											}}>
											<Grid2
												size={12}
												sx={{
													display: 'flex',
													flexDirection: 'column',
												}}>
												<Box sx={{ pb: 2 }}>
													<Typography>Type</Typography>
												</Box>
												<Grid2
													container
													spacing={2}>
													<Grid2
														size={6}
														sx={{
															height: 'auto',
															display: 'flex',
															justifyContent: 'center',
															backgroundColor: '#9bcc50',
															px: 7,
															py: 0.5,
															borderRadius: 1,
														}}>
														Grass
													</Grid2>
													<Grid2
														size={6}
														sx={{
															height: 'auto',
															display: 'flex',
															justifyContent: 'center',
															backgroundColor: '#b97fc9',
															px: 7,
															py: 0.5,
															borderRadius: 1,
														}}>
														Poison
													</Grid2>
												</Grid2>
											</Grid2>
											<Grid2
												size={12}
												sx={{
													display: 'flex',
													flexDirection: 'column',
												}}>
												<Box sx={{ pb: 2 }}>
													<Typography>Weaknesses</Typography>
												</Box>
												<Grid2
													container
													spacing={1}>
													<Grid2
														size={6}
														sx={{
															height: 'auto',
															display: 'flex',
															justifyContent: 'center',
															backgroundColor: '#fd7d24',
															px: 7,
															py: 0.5,
															borderRadius: 1,
															color: '#fff',
														}}>
														Fire
													</Grid2>
													<Grid2
														size={6}
														sx={{
															height: 'auto',
															display: 'flex',
															justifyContent: 'center',
															backgroundColor: '#51c4e7',
															px: 7,
															py: 0.5,
															borderRadius: 1,
														}}>
														Ice
													</Grid2>
													<Grid2
														size={6}
														sx={{
															height: 'auto',
															display: 'flex',
															justifyContent: 'center',
															alignItems: 'center',
															background:
																'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)',
															px: 7,
															py: 0.5,
															borderRadius: 1,
														}}>
														<Typography
															sx={{
																fontSize: '14px',
																fontWeight: 'bold',
																color: '#fff',
															}}>
															Flying
														</Typography>
													</Grid2>

													<Grid2
														size={6}
														sx={{
															height: 'auto',
															display: 'flex',
															justifyContent: 'center',
															backgroundColor: '#f366b9',
															px: 7,
															py: 0.5,
															borderRadius: 1,
															color: '#fff',
														}}>
														Psychic
													</Grid2>
												</Grid2>
											</Grid2>
										</Grid2>
									</Grid2>{' '}
								</Grid2>
							</Grid2>
						</Grid2>
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
