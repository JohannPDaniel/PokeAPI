import { Button, Card, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Type } from '../../../types/pokemonDetails.types';
import { ContentCard } from '../ContentCard';
import { getCardStyle } from './styleCard';

interface CardPokemonProps {
	id: number;
	name: string;
	image: string;
	weight: number;
	types: Type[];
}

export function CardPokemon({
	id,
	name,
	image,
	weight,
	types,
}: CardPokemonProps) {
	const navigate = useNavigate();

	const cardStyle = getCardStyle(types);

	return (
		<Card
			sx={{
				...cardStyle.background,
			}}>
			<ContentCard
				id={id}
				image={image}
				name={name}
				types={types}
				weight={weight}
			/>
			<CardActions
				sx={{
					display: 'flex',
					justifyContent: 'center',
				}}>
				<Button
					size='small'
					variant='contained'
					color='primary'
					onClick={() =>
						navigate(`/pokemon/${id}`, {
							state: {
								id,
								name,
								image,
								weight,
								types,
							},
						})
					}
					sx={{ width: '100%' }}>
					Veja mais
				</Button>
			</CardActions>
		</Card>
	);
}
