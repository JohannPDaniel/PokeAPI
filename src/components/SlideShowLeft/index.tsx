import { Box } from '@mui/material';
import { useState, useEffect } from 'react';

const images = [
	{
		src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
		caption: 'Charizard',
	},
	{
		src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
		caption: 'Pikachu',
	},
	{
		src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
		caption: 'Mewtwo',
	},
];

export const SlideshowLeft = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	useEffect(() => {
		const interval = setInterval(nextSlide, 5000);
		return () => clearInterval(interval);
	}, []);

	const getBackgroundColor = (caption: string) => {
		switch (caption) {
			case 'Charizard':
				return {
					background: '#eb4242',
					nome: '#b51212',
					default: '#e66565',
				};
			case 'Pikachu':
				return {
					background: '#ffd700',
					nome: 'red',
					default: 'red',
				};
			case 'Mewtwo':
				return {
					background: '#9b30ff',
					nome: '#5f0aae',
					default: '#a464df',
				};
			default:
				return {
					background: '#000',
					default: '#bbb',
				};
		}
	};

	return (
		<Box
			sx={{
				...styles.container,
				background: `repeating-linear-gradient(
			-45deg,
			${getBackgroundColor(images[currentIndex].caption).background},
			${getBackgroundColor(images[currentIndex].caption).background} 5px,
			white 30px,
			white 20px
		)`,
			}}>
			{images.map((image, index) => (
				<Box
					key={index}
					sx={{
						...styles.slide,
						display: index === currentIndex ? 'block' : 'none',
					}}>
					<img
						src={image.src}
						alt={`Slide ${index + 1}`}
						style={styles.image}
					/>
					<Box
						sx={{
							...styles.caption,
							color: getBackgroundColor(image.caption).nome || 'black',
						}}>
						{image.caption}
					</Box>
				</Box>
			))}

			<Box sx={styles.dotsContainer}>
				{images.map((image, index) => (
					<span
						key={index}
						onClick={() => setCurrentIndex(index)}
						style={{
							...styles.dot,
							backgroundColor:
								index === currentIndex
									? getBackgroundColor(image.caption).background
									: getBackgroundColor(images[currentIndex].caption).default,
						}}></span>
				))}
			</Box>
		</Box>
	);
};

const styles = {
	container: {
		height: '100%',
		width: '100%', 
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center', 
		margin: '0',
		padding: '0',
	},
	slide: {
		position: 'relative',
		textAlign: 'center',
	},
	image: {
		width: '100%',
		borderRadius: '5px',
	},
	caption: {
		fontSize: '15px',
		fontWeight: '700',
		padding: '8px 12px',
		position: 'absolute',
		bottom: '-15px',
		width: '100%',
		textAlign: 'center',
	},
	dotsContainer: {
		textAlign: 'center',
		marginTop: '15px',
	},
	dot: {
		cursor: 'pointer',
		height: '15px',
		width: '15px',
		margin: '0 2px',
		borderRadius: '50%',
		display: 'inline-block',
		transition: 'background-color 0.6s ease',
	},
};
