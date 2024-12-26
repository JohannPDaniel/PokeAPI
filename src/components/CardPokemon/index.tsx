import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from '@mui/material';

interface CardPokemonProps {
	name: string;
	image: string;
	description: string;
}

export function CardPokemon({ name, image, description }: CardPokemonProps) {
	return (
		<Card>
			<CardActionArea>
				<CardMedia
					component='img'
					height='140'
					image={image}
					alt={name}
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant='h5'
						component='div'>
						{name}
					</Typography>
					<Typography
						variant='body2'
						sx={{ color: 'text.secondary' }}>
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button
					size='small'
					color='primary'>
					Share
				</Button>
			</CardActions>
		</Card>
	);
}
