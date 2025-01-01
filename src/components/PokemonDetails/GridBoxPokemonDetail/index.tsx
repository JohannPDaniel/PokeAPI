import { Grid2, Box, Typography, useMediaQuery } from '@mui/material';
import { typeColors } from '../../../utils/typeColors';
import { useAppSelector } from '../../../store/hook';
import { useParams } from 'react-router-dom';
import { typeWeaknesses } from '../../../utils/typeWeaknesses';

export const GridBoxPokemonDetail = () => {
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

	const typeColor = typeColors[pokemon.types[0].type.name] || '#f5f5f5';

	const isSmallMobile = useMediaQuery('(max-width: 374px)');
	const isMediumMobile = useMediaQuery(
		'(min-width: 375px) and (max-width: 424px)'
	);
	const isLargeMobile = useMediaQuery(
		'(min-width: 425px) and (max-width: 767px)'
	);

	let gridSize = 12;
	if (isSmallMobile) {
		gridSize = 12;
	} else if (isMediumMobile) {
		gridSize = 12;
	} else if (isLargeMobile) {
		gridSize = 6;
    }

	let gridWidth = "150px";
	if (isSmallMobile) {
		gridWidth = '148px';
	} else if (isMediumMobile) {
		gridWidth = '200px';
	} else if (isLargeMobile) {
		gridWidth = '250px';
    }
    


	return (
		<Grid2 size={12}>
			<Grid2 container>
				{/* Caixa 1 */}
				<Grid2
					size={{ xs: 12, sm: 6 }}
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
					size={{ xs: 12, sm: 6 }}
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
							size={4}
                            sx={ {
                                width: "100%",
								display: 'flex',
								flexDirection: { xs: 'column', sm: 'row' },
								gap: 2,
							}}>
							<Box sx={{ width: "100%"}}>
								<Typography>Height</Typography>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										backgroundColor: typeColor,
										color: '#fff',
										padding: { xs: '0.5rem 1rem' },
										mr: 1,
										mt: 1,
										borderRadius: 1,
										textTransform: 'capitalize',
										width: { xs: gridWidth, sm: '100%' },
									}}>
									{Number(pokemon.height / 10).toFixed(2)} m
								</Box>
							</Box>
							<Box sx={{ width: "100%"}}>
								<Typography>Weight</Typography>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										backgroundColor: typeColor,
										color: '#fff',
										padding: { xs: '0.5rem 1rem' },
										mt: 1,
										borderRadius: 1,
										textTransform: 'capitalize',
										width: { xs: gridWidth, sm: '100%' },
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
									flexWrap: { xs: 'wrap', sm: 'nowrap' },
									gap: 1,
									overflowX: 'auto',
								}}>
								{pokemon.abilities.map((ability, index) => {
									const typeColor =
										typeColors[pokemon.types[0].type.name] || '#f5f5f5';
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
												width: { xs: gridWidth, sm: "100%" },
											}}>
											{ability.ability.name}
										</Box>
									);
								})}
							</Box>
						</Grid2>
						<Grid2
							size={12}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								gap: 1,
							}}>
							<Typography>Experience</Typography>
							<Box
								sx={{
									display: 'flex',
									flexWrap: 'nowrap',
									gap: 1,
									overflowX: 'auto',
								}}>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										backgroundColor: typeColor,
										color: '#fff',
										padding: '0.5rem 1rem',
										borderRadius: 1,
										textTransform: 'capitalize',
										width: { xs: gridWidth, sm: '100%' },
									}}>
									{pokemon.base_experience}
								</Box>
							</Box>
						</Grid2>
					</Grid2>
				</Grid2>
				{/* Caixa 3 */}
				<Grid2
					size={{ xs: 12, sm: 6 }}
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
								<Typography sx={{ width: '50px', textAlign: 'right' }}>
									{stat.base_stat}
								</Typography>
							</Grid2>
						))}
					</Grid2>
				</Grid2>
				{/* Caixa 4 */}
				<Grid2
					size={{ xs: 12, sm: 6 }}
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
										size={{ xs: gridSize, sm: 6 }}
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
										size={{ xs: gridSize, sm: 6 }}
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
	);
};
