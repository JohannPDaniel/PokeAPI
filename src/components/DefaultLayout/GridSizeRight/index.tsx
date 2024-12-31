import { Grid2 } from '@mui/material';
import { SlideshowRight } from '../SlideShowRight';

export const GridSizeRight = () => {
	return (
		<Grid2
			size={{ xs: 0, sm: 0, md: 3 }}
			sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
			<SlideshowRight />
		</Grid2>
	);
};
