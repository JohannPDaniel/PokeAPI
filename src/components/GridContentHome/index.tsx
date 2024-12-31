import { Box, Grid2, TextField, useMediaQuery } from '@mui/material';
import wallPaperPokemon from '../../assets/wallPaperPokemon.png';
import { useHome } from '../../config/hooks/useHome';
import { GridCard } from '../GridCard';
import { style } from '../Home/style';

export const GridContentHome = () => {
	const { searchTerm, handleSearchChange } = useHome();
	const isSmallMobile = useMediaQuery('(max-width: 374px)');
	const isMediumMobile = useMediaQuery(
		'(min-width: 375px) and (max-width: 424px)'
	);
	
	const isLargeMobile = useMediaQuery(
		'(min-width: 425px) and (max-width: 767px)'
	);

	let paddingSize = 12;
	if (isSmallMobile) {
		paddingSize = 4;
	} else if (isMediumMobile) {
		paddingSize = 6;
	} else if (isLargeMobile) {
		paddingSize = 9;
	}

	return (
		<Grid2
			size={12}
			sx={{
				display: 'flex',
				flexDirection: 'column',
			}}>
			<Grid2
				size={12}
				sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
				<Box
					component='img'
					src={wallPaperPokemon}
					alt='Pokémon'
					sx={style.wallPaperPokemon}
				/>
			</Grid2>
			<Grid2
				size={{ xs: 12 }}
				sx={{
					...style.input,
					px: { xs: paddingSize, sm: 8, md: 4, lg: 20 },
				}}>
				<TextField
					fullWidth
					type='text'
					placeholder='Pesquise um Pokémon'
					value={searchTerm}
					onChange={handleSearchChange}
				/>
			</Grid2>
			<GridCard />
		</Grid2>
	);
};
