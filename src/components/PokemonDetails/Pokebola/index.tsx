import { Box, useMediaQuery, useTheme } from '@mui/material';
import pokebolaGirando from '../../../assets/pokebolaGirando.gif';

export const Pokebola = () => {
	const theme = useTheme();

	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
	const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

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

	return (
		<Box
			component='img'
			src={pokebolaGirando}
			alt='pokebola girando'
			style={{
				clipPath: 'circle(31%)',
				width: imageSize,
				position: 'fixed',
				bottom: 0,
				right: 0,
			}}
		/>
	);
};
