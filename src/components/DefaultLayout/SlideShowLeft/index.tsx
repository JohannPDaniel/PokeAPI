import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { getBackgroundColor, images, styleSlideShowLeft } from "./styleSlideShowLeft";

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

	return (
		<Box
			sx={{
				...styleSlideShowLeft.container,
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
						...styleSlideShowLeft.slide,
						display: index === currentIndex ? 'block' : 'none',
					}}>
					<img
						src={image.src}
						alt={`Slide ${index + 1}`}
						style={styleSlideShowLeft.image}
					/>
					<Box
						sx={{
							...styleSlideShowLeft.caption,
							color: getBackgroundColor(image.caption).nome || 'black',
						}}>
						{image.caption}
					</Box>
				</Box>
			))}

			<Box sx={styleSlideShowLeft.dotsContainer}>
				{images.map((image, index) => (
					<span
						key={index}
						onClick={() => setCurrentIndex(index)}
						style={{
							...styleSlideShowLeft.dot,
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
