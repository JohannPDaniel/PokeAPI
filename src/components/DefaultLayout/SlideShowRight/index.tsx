import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import {
	getBackgroundColor,
	images,
	styleSlideShowRight,
} from './styleSlideShowRight';

export const SlideshowRight = () => {
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
				...styleSlideShowRight.container,
				background: `repeating-linear-gradient(
                    45deg,
                    ${
											getBackgroundColor(images[currentIndex].caption)
												.background
										},
                    ${
											getBackgroundColor(images[currentIndex].caption)
												.background
										} 5px,
                    white 30px,
                    white 20px
                )`,
			}}>
			{images.map((image, index) => (
				<Box
					key={index}
					sx={{
						...styleSlideShowRight.slide,
						display: index === currentIndex ? 'block' : 'none',
					}}>
					<img
						src={image.src}
						alt={`Slide ${index + 1}`}
						style={styleSlideShowRight.image}
					/>
					<Box
						sx={{
							...styleSlideShowRight.caption,
							color: getBackgroundColor(image.caption).nome || 'black',
						}}>
						{image.caption}
					</Box>
				</Box>
			))}

			<Box sx={styleSlideShowRight.dotsContainer}>
				{images.map((image, index) => (
					<span
						key={index}
						onClick={() => setCurrentIndex(index)}
						style={{
							...styleSlideShowRight.dot,
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
