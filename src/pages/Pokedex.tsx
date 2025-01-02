import { Box, Grid2, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import whatsPokemon from '../assets/wallPaperPikachu.webp';
import pokebolaVermelha from '../assets/pokebolaVermelha.jpg';
import wallPaperPokebola from '../assets/wallPaperPokebola.jpg';
import pokeWallPaper from '../assets/pokeWallPaper.jpg';
import { AppBarMui } from "../components/Pokedex/AppBarMui";

const images = [
	pokeWallPaper,
	pokebolaVermelha,
	wallPaperPokebola,
	whatsPokemon,
];

const colors = ['#ff5733', '#fff833', '#00d5ff', '#ff0000'];

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
            <Grid2 size={12}>
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
						alignItems: 'center',
						justifyContent: 'center',
						overflow: 'hidden',
						backgroundImage: `url(${images[currentIndex]})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
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
