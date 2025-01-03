import { Box, Grid2, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import pokebolaVermelha from '../assets/pokebolaVermelha.jpg';
import pokeWallPaper from '../assets/pokeWallPaper.jpg';
import whatsPokemon from '../assets/wallPaperPikachu.webp';
import { AppBarMui } from '../components/Pokedex/AppBarMui';
import { CardPokedex } from '../components/Pokedex/CardPokedex';

const images = [pokeWallPaper, pokebolaVermelha, whatsPokemon];
const colors = ['#ff5733', '#fff833', '#00d5ff']; 
export const Pokedex = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Grid2 container>
			<Grid2 size={12} sx={{ mb: {xs: 7, md: 8} }}>
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
					<Grid2 container>
						<Grid2
							size={12}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								textAlign: 'center',
							}}>
							<Typography
								variant='h3'
								sx={{
									color: 'white',
									pt: 2,
								}}>
								Eu escolho você
							</Typography>

							<Grid2
								container
								spacing={2}
								sx={{
									mb: 10,
									mt: 5,
									justifyContent: 'center',
									p: { xs: 5, sm: 5 },
								}}>
								{Array.from({ length: 4 }).map((_, index) => (
									<Grid2
										key={index}
										size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
										sx={{
											display: 'flex',
											justifyContent: 'center',
											minWidth: 260,
											maxWidth: '100%',
										}}>
										<CardPokedex
											id={index + 1}
											image=''
											name={`nome ${index + 1}`}
											types={[]}
											weight={1}
										/>
									</Grid2>
								))}
							</Grid2>
						</Grid2>
					</Grid2>

					<Box
						sx={{
							position: 'absolute',
							bottom: 20,
							left: '50%',
							transform: 'translateX(-50%)',
							display: 'flex',
							gap: 1,
						}}>
						{images.map((_, index) => (
							<Box
								key={index}
								sx={{
									width: 20,
									height: 20,
									borderRadius: '50%',
									backgroundColor:
										index === currentIndex ? '#54de38' : '#3939e9',
									transition: 'background-color 1s',
									cursor: 'pointer',
								}}
								onClick={() => setCurrentIndex(index)}
							/>
						))}
					</Box>
				</Paper>
			</Grid2>
		</Grid2>
	);
};
