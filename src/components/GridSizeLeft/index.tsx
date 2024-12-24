import { Grid2 } from '@mui/material';

export const GridSizeLeft = () => {
	return (
		<Grid2
			size={{ xs: 0, sm: 0, md: 3 }}
			sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
			<h1>Olá mundo</h1>
		</Grid2>
	);
};
