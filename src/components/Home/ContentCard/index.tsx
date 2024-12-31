import {
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
} from '@mui/material';
import { Type } from "../../../types/pokemonDetails.types";
import { getCardStyle } from "../CardPokemon/styleCard";

interface CardPokemonProps {
	id: number;
	name: string;
	image: string;
	weight: number;
	types: Type[];
}

export const ContentCard = ({
	id,
	name,
	image,
	weight,
	types,
}: CardPokemonProps) => {
	const titleHeight = name.length > 30 ? '100px' : 'auto';
	const cardStyle = getCardStyle(types);

	return (
		<CardActionArea>
			<CardMedia
				component='img'
				sx={{
					height: '180px',
					objectFit: 'contain',
				}}
				image={image}
				alt={name}
			/>
			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
				}}>
				<Typography
					variant='caption'
					textAlign='center'>
					Nº 000{id}
				</Typography>
				<Typography
					variant='h6'
					sx={{
						...cardStyle.name,
						height: titleHeight,
					}}>
					{name}
				</Typography>
				<Typography
					variant='body2'
					sx={{
						textAlign: 'center',
					}}>
					Peso: {Number(weight.toFixed(2)) / 10} kg
				</Typography>
			</CardContent>
		</CardActionArea>
	);
};
