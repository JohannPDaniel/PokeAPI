import { Button, Card, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Type } from '../../../types/pokemonDetails.types';
import { ContentCard } from '../../Home/ContentCard';
import { typeColors } from '../../../utils/typeColors';
import { CatchingPokemon } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import { toggleCardState } from '../../../store/modules/AddPokedexSlice/AddPokedexSlice.reducer';
import { keyframes } from '@emotion/react';


interface CardPokemonProps {
	id: number;
	name: string;
	image: string;
	weight: number;
	types: Type[];
}

export function CardPokedex({
	id,
	name,
	image,
	weight,
	types,
}: CardPokemonProps) {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const isActive = useAppSelector(
		(state) => state.addPokedex.activeCards[id] || false
	);

	const getCardBackground = (types: Type[]) => {
		if (!types || types.length === 0) return '#f5f5f5';

		const colors = types
			.map((type) => typeColors[type.type.name] || '#f5f5f5')
			.slice(0, 2);

		if (colors.length === 1) {
			return colors[0];
		} else {
			return `linear-gradient(122deg, ${colors[0]} 50%, ${colors[1]} 50%)`;
		}
	};

	const typeNames = types.map( ( type ) => type.type.name );
	
	const fadeInUp = keyframes`
	  from {
		opacity: 0;
		transform: translateY(50px);
	  }
	  to {
		opacity: 1;
		transform: translateY(0);
	  }
	`;
	

	return (
		<Card
			sx={{
				width: '100%',
				height: 'auto',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				color: 'white',
				background: getCardBackground(types),
				backgroundSize: 'cover',
				boxShadow: 'none',
				animation: `${fadeInUp} 0.8s ease-out`,
				transition: 'opacity 0.4s, transform 0.4s',
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
								types: typeNames, // Aqui passamos os nomes dos tipos como string[]
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
									weight,
									types: typeNames, // Aqui passamos os nomes dos tipos como string[]
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
