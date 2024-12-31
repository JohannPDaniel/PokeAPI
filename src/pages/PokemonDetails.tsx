import { Box, Button, Grid2, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
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
	const navigate = useNavigate()
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

	const weaknesses = Array.from(
		new Set(
			pokemon.types
				.flatMap((type) => typeWeaknesses[type.type.name] || [])
				.filter(Boolean)
		)
	);

	const typeColors: { [key: string]: string } = {
		normal: '#A8A77A',
		fighting: '#C22E28',
		flying: '#A98FF3',
		poison: '#A33EA1',
		ground: '#8e7f51',
		rock: '#B6A136',
		bug: '#A6B91A',
		ghost: '#735797',
		steel: '#B7B7CE',
		fire: '#EE8130',
		water: '#6390F0',
		grass: '#7AC74C',
		electric: '#F7D02C',
		psychic: '#F95587',
		ice: '#96D9D6',
		dragon: '#6F35FC',
		dark: '#0e0e0e',
		fairy: '#D685AD',
	};

	const typeColor = typeColors[pokemon.types[0].type.name] || '#f5f5f5';

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
											height: 'auto',
										}}>
										<Box
											sx={{
												width: '100%',
												aspectRatio: '1 / 1',
												backgroundImage: `url(${pokemon.sprites.other['official-artwork'].front_default})`,
												backgroundSize: 'cover',
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
												size={10}
												sx={{
													display: 'flex',
													justifyContent: 'space-between',
												}}>
												<Box>
													<Typography>Height</Typography>
													<Box
														sx={{
															display: 'flex',
															justifyContent: 'center',
															alignItems: 'center',
															backgroundColor: typeColor,
															color: '#fff',
															padding: '0.5rem 3rem',
															mr: 1,
															mt: 1,
															borderRadius: 1,
															textTransform: 'capitalize',
														}}>
														{Number(pokemon.height / 10).toFixed(2)} m
													</Box>
												</Box>
												<Box>
													<Typography>Weight</Typography>
													<Box
														sx={{
															display: 'flex',
															justifyContent: 'center',
															alignItems: 'center',
															backgroundColor: typeColor,
															color: '#fff',
															padding: '0.5rem 2rem',
															mt: 1,
															borderRadius: 1,
															textTransform: 'capitalize',
														}}>
														{(Number(pokemon.weight) / 10).toFixed(1)} kg
													</Box>
												</Box>
											</Grid2>
											<Grid2
												size={12}
												sx={{
													display: 'flex',
													flexDirection: 'column',
													gap: 1,
												}}>
												<Typography>Abilities</Typography>
												<Box
													sx={{
														display: 'flex',
														flexWrap: 'nowrap',
														gap: 1,
														overflowX: 'auto',
													}}>
													{pokemon.abilities.map((ability, index) => {
														const typeColor =
															typeColors[pokemon.types[0].type.name] ||
															'#f5f5f5';
														return (
															<Box
																key={index}
																sx={{
																	display: 'flex',
																	justifyContent: 'center',
																	alignItems: 'center',
																	backgroundColor: typeColor,
																	color: '#fff',
																	padding: '0.5rem 1rem',
																	borderRadius: 1,
																	textTransform: 'capitalize',
																}}>
																{ability.ability.name}
															</Box>
														);
													})}
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
																width: `${(stat.base_stat / 200) * 100}%`,
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
																backgroundColor: typeColors[type.type.name],
																px: 7,
																py: 0.5,
																borderRadius: 1,
																color: '#fff',
															}}>
															{type.type.name}
														</Grid2>
													))}
												</Grid2>
											</Grid2>

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
																backgroundColor: typeColors[weakness] || '#f66',
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
