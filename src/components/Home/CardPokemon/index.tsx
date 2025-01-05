import { CatchingPokemon } from '@mui/icons-material';
import { Button, Card, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import { toggleCardState } from '../../../store/modules/AddPokedexSlice/AddPokedexSlice.reducer';
import { Type } from '../../../types/pokemonDetails.types';
import { ContentCard } from '../ContentCard';
import { getCardStyle } from './styleCard';

interface CardPokemonProps {
	id: number;
	name: string;
	image: string;
	height: number;
	types: Type[];
}

export function CardPokemon({
	id,
	name,
	image,
	height,
	types,
}: CardPokemonProps) {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const isActive = useAppSelector(
		(state) => state.addPokedex.activeCards[id] || false
	);

	const typeNames = types.map((type) => type.type.name);

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
				height={height}
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
								height,
								types: typeNames,
							},
						})
					}
					sx={{ width: '100%' }}>
					Veja mais
				</Button>
				<Button
					variant='contained'
					size='small'
					sx={{
						width: '100%',
						backgroundColor: isActive ? '#ff0' : '#ff0000',
						'&:hover': {
							backgroundColor: isActive ? '#ff0' : '#cc0000',
						},
					}}
					onClick={() =>
						dispatch(
							toggleCardState({
								id,
								card: {
									id,
									name,
									image,
									height,
									types: typeNames,
								},
							})
						)
					}>
					<CatchingPokemon
						sx={{
							color: isActive ? '#ff0000' : '#ff0',
							'&:hover': {
								color: isActive ? '#ec4a4a' : '#ff0',
							},
						}}
					/>
				</Button>
			</CardActions>
		</Card>
	);
}
