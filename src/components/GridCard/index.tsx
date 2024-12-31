import { Grid2 } from '@mui/material';
import { CardPokemon } from '../CardPokemon';
import { style } from '../Home/style';
import { useHome } from '../../config/hooks/useHome';
import { useMediaQuery } from '@mui/material';

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
						size={{ xs: gridSize, sm: 6, md: 6, lg: 4 }} 
					>
						<CardPokemon
							types={pokemon.types}
							id={pokemon.id}
							name={pokemon.name}
							weight={pokemon.weight}
							image={pokemon.sprites.other['official-artwork'].front_default}
						/>
					</Grid2>
				))
			) : (
				<p>Nenhum Pokémon encontrado.</p>
			)}
		</Grid2>
	);
};
