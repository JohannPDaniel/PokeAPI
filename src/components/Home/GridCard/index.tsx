import { Grid2, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useHome } from "../../../config/hooks/useHome";
import { style } from "../style";
import { CardPokemon } from "../CardPokemon";

export const GridCard = () => {
	const { currentPagePokemons } = useHome();

	const isSmallMobile = useMediaQuery('(max-width: 374px)');
	const isMediumMobile = useMediaQuery(
		'(min-width: 375px) and (max-width: 424px)'
	);
	const isLargeMobile = useMediaQuery(
		'(min-width: 425px) and (max-width: 767px)'
	);

	let gridSize = 12; 
	if (isSmallMobile) {
		gridSize = 10; 
	} else if (isMediumMobile) {
		gridSize = 9; 
	} else if (isLargeMobile) {
		gridSize = 8; 
	}

	return (
		<Grid2
			container
			spacing={4}
			sx={style.card}>
			{currentPagePokemons.length > 0 ? (
				currentPagePokemons.map((pokemon) => (
					<Grid2
						key={pokemon.id}
						size={{ xs: gridSize, sm: 6, md: 6, lg: 4 }}>
						<CardPokemon
							types={pokemon.types}
							id={pokemon.id}
							name={pokemon.name}
							height={pokemon.height}
							image={pokemon.sprites.other['official-artwork'].front_default}
						/>
					</Grid2>
				))
			) : (
				<Typography
					variant='h2'
					sx={{
						color: 'white',
						typography: {
							xs: 'h5',
							sm: 'h4',
							lg: 'h3',
						},
						textAlign: 'center',
					}}>
					Nenhum Pokémon encontrado.
				</Typography>
			)}
		</Grid2>
	);
};
