import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from '@mui/material';
import { Type } from '../../types/pokemonDetails.types';
import { useNavigate } from "react-router-dom";

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
	const titleHeight = name.length > 30 ? '100px' : 'auto';
	const navigate = useNavigate()

	return (
		<Card
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				background: (() => {
					if (!types || types.length === 0) return '#f5f5f5';

					const typeColors: { [key: string]: string } = {
						normal: '#A8A77A',
						fighting: '#C22E28',
						flying: '#A98FF3',
						poison: '#A33EA1',
						ground: '#8e7f51',
						rock: '#B6A136',
						bug: '#A6B91A',
						ghost: '#735797',
						steel: '#B7B7CE',
						fire: '#EE8130',
						water: '#6390F0',
						grass: '#7AC74C',
						electric: '#F7D02C',
						psychic: '#F95587',
						ice: '#96D9D6',
						dragon: '#6F35FC',
						dark: '#0e0e0e',
						fairy: '#D685AD',
					};

					const colors = types
						.map((type) => typeColors[type.type.name] || '#f5f5f5')
						.slice(0, 2);

					if (colors.length === 1) {
						return colors[0];
					} else {
						return `linear-gradient(122deg, ${colors[0]} 50%, ${colors[1]} 50%)`;
					}
				})(),
				color: 'white',
				backgroundSize: 'cover',
				boxShadow: 'none',
			}}>
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
							textAlign: 'center',
							height: titleHeight,
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
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
