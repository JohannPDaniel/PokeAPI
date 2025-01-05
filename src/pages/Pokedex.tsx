import { Box, Grid2, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import pokebolaVermelha from '../assets/pokebolaVermelha.jpg';
import pokeWallPaper from '../assets/pokeWallPaper.jpg';
import whatsPokemon from '../assets/wallPaperPikachu.webp';
import { AppBarMui } from '../components/Pokedex/AppBarMui';
import { CardPokedex } from '../components/Pokedex/CardPokedex';
import { useAppSelector } from '../store/hook';
import { Type } from '../types/pokemonDetails.types';

const images = [pokeWallPaper, pokebolaVermelha, whatsPokemon];
const colors = ['#ff5733', '#fff833', '#00d5ff'];

export const Pokedex = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const selectedCards = useAppSelector(
		(state) => state.addPokedex.selectedCards
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 10000);

		return () => clearInterval(interval);
	}, []);
	const convertToTypeArray = (typeNames: string[]): Type[] =>
		typeNames.map((name) => ({ type: { name } }));
	return (
		<Grid2 container>
			<Grid2
				size={12}
				sx={{ mb: { xs: 7, md: 8 } }}>
				<AppBarMui />
			</Grid2>

			<Grid2
				size={12}
				sx={{
					padding: 5,
					backgroundColor: colors[currentIndex],
					transition: 'background-color 1s ease',
				}}>
				<Paper
					elevation={20}
					sx={{
						width: '100%',
						minHeight: '100vh',
						borderRadius: 5,
						position: 'relative',
						display: 'flex',
						justifyContent: 'center',
						overflow: 'hidden',
						backgroundImage: `url(${images[currentIndex]})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
					<Grid2
						container
						spacing={4}
						sx={{
							width: '100%',
							height: 'auto',
							display: 'flex',
							justifyContent: 'center',
							textAlign: 'center',
							p: 5,
						}}>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
							}}>
							<Typography
								variant='h3'
								sx={{
									color: 'white',
								}}>
								Eu escolho você !!!
							</Typography>
						</Box>
						{selectedCards.length > 0 ? (
							selectedCards.map((pokemon) => (
								<Grid2
									key={pokemon.id}
									size={ { xs: 12, sm: 6, md: 4, lg: 3 } }
								>
									<CardPokedex
										types={convertToTypeArray(pokemon.types)}
										id={pokemon.id}
										name={pokemon.name}
										height={pokemon.height}
										image={pokemon.image}
									/>
								</Grid2>
							))
						) : (
							<Typography
								variant='h2'
								sx={{
									color: '#00ffee',
									fontWeight: 800,
									textAlign: 'center',
								}}>
								Nenhum Pokémon encontrado.
							</Typography>
						)}
					</Grid2>
				</Paper>
			</Grid2>
		</Grid2>
	);
};
