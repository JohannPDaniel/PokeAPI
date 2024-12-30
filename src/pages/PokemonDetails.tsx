import { Box, Grid2, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../store/hook';
import decoration1 from '../assets/decoration1.png';
import nextPage from '../assets/nextPage.png';
import pokebolaGirando from '../assets/pokebolaGirando.gif';
import { useEffect } from 'react';

const typeWeaknesses: { [key: string]: string[] } = {
	grass: ['fire', 'ice', 'poison', 'flying', 'bug'],
	poison: ['ground', 'psychic'],
	fire: ['water', 'rock', 'ground'],
	water: ['electric', 'grass'],
	electric: ['ground'],
	flying: ['electric', 'ice', 'rock'],
	ground: ['water', 'grass', 'ice'],
	rock: ['water', 'grass', 'fighting', 'ground', 'steel'],
	psychic: ['bug', 'ghost', 'dark'],
	ice: ['fire', 'fighting', 'rock', 'steel'],
	dragon: ['ice', 'dragon', 'fairy'],
	dark: ['fighting', 'bug', 'fairy'],
	fairy: ['poison', 'steel'],
	bug: ['fire', 'flying', 'rock'],
	steel: ['fire', 'fighting', 'ground'],
	ghost: ['ghost', 'dark'],
	normal: ['fighting'],
};
export const PokemonDetails = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
	const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

	const { id } = useParams();
	const pokemon = useAppSelector((state) =>
		state.pokemon.allPokemons.find((poke) => poke.id === parseInt(id || '', 10))
	);

	if (!pokemon) {
		return <Typography variant='h6'>Pokémon não encontrado.</Typography>;
	}

	const weaknesses = Array.from(
		new Set(
			pokemon.types
				.flatMap((type) => typeWeaknesses[type.type.name] || [])
				.filter(Boolean)
		)
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
		document.title = `${pokemon.name} | Pokedex`;
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
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							position: 'relative',
						}}>
						<Typography
							variant='h3'
							sx={{
								position: 'absolute',
								bottom: '0',
								textAlign: 'center',
								color: 'black',
							}}>
							{pokemon.name} Nº 000{pokemon.id}
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
										}}>
										<Box
											sx={{
												width: '100%',
												height: '100%',
												backgroundImage: `url(${pokemon.sprites.other['official-artwork'].front_default})`,
												backgroundSize: 'contain',
												backgroundPosition: 'center',
												backgroundRepeat: 'no-repeat',
												overflow: 'hidden',
												borderRadius: 2,
											}}></Box>
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
												size={9}
												sx={{
													display: 'flex',
													justifyContent: 'space-between',
												}}>
												<Box>
													<Typography>Height</Typography>
													<Typography>{pokemon.height} m</Typography>
												</Box>
												<Box>
													<Typography>Category</Typography>
													<Typography>Seed</Typography>
												</Box>
											</Grid2>
											<Grid2
												size={9}
												sx={{
													display: 'flex',
													justifyContent: 'space-between',
												}}>
												<Box>
													<Typography>Weight</Typography>
													<Typography>
														{(Number(pokemon.weight) / 10).toFixed(2)} kg
													</Typography>
												</Box>
												<Box>
													<Typography>Abilities</Typography>
													<Typography>
														{pokemon.abilities
															.map((ability) => ability.ability.name)
															.join(', ')}
													</Typography>
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
											{pokemon.stats.map((stat, index) => (
												<Grid2
													key={index}
													size={12}
													sx={{
														display: 'flex',
														alignItems: 'center',
														gap: 1,
													}}>
													<Typography sx={{ width: '100px' }}>
														{stat.stat.name}
													</Typography>
													<Box
														sx={{
															flexGrow: 1,
															height: '20px',
															backgroundColor: '#fff',
															border: '1px solid #ccc',
															borderRadius: '5px',
															overflow: 'hidden',
															position: 'relative',
														}}>
														<Box
															sx={{
																height: '100%',
																width: `${(stat.base_stat / 200) * 100}%`, // Ajusta o tamanho proporcional à largura da barra branca
																backgroundColor: '#30a7d7',
															}}
														/>
													</Box>
													<Typography
														sx={{ width: '50px', textAlign: 'right' }}>
														{stat.base_stat}
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
											{/* Tipos */}
											<Grid2
												size={12}
												sx={{
													display: 'flex',
													flexDirection: 'column',
												}}>
												<Box sx={{ pb: 2 }}>
													<Typography variant='h6'>Type</Typography>
												</Box>
												<Grid2
													container
													spacing={2}>
													{pokemon.types.map((type, index) => (
														<Grid2
															key={index}
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
															{type.type.name}
														</Grid2>
													))}
												</Grid2>
											</Grid2>

											{/* Weaknesses */}
											<Grid2
												size={12}
												sx={{
													display: 'flex',
													flexDirection: 'column',
												}}>
												<Box sx={{ pb: 2 }}>
													<Typography variant='h6'>Weaknesses</Typography>
												</Box>
												<Grid2
													container
													spacing={2}>
													{weaknesses.map((weakness, index) => (
														<Grid2
															key={index}
															size={6}
															sx={{
																height: 'auto',
																display: 'flex',
																justifyContent: 'center',
																backgroundColor: '#f66',
																px: 7,
																py: 0.5,
																borderRadius: 1,
																color: '#fff',
															}}>
															{weakness}
														</Grid2>
													))}
												</Grid2>
											</Grid2>
										</Grid2>
									</Grid2>
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
