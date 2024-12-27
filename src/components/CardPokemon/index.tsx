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
	id: number;
	name: string;
	image: string;
	description: string;
}

export function CardPokemon({ id, name, image, description }: CardPokemonProps) {
	return (
		<Card
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}>
			<CardActions
				sx={{
					maxHeight: 50,
					px: 2
				}}>
				<Typography>Nº 000{id}</Typography>
			</CardActions>

			<CardActionArea>
				<CardMedia
					component='img'
					height='220'
					image={image}
					alt={name}
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant='h6'>
						{name}
					</Typography>
					<Typography
						variant='body2'
						sx={{ color: 'text.secondary' }}>
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions
				sx={{
					maxHeight: 50,
				}}>
				<Button
					size='small'
					color='primary'>
					Share
				</Button>
			</CardActions>
		</Card>
	);
}
