import { Grid2 } from '@mui/material';
import { SlideshowLeft } from "../SlideShowLeft";

export const GridSizeLeft = () => {
	return (
		<Grid2
			size={{ xs: 0, sm: 0, md: 3 }}
			sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
			<SlideshowLeft />
		</Grid2>
	);
};
