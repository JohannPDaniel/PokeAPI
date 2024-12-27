import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	Box,
} from '@mui/material';

interface CardPokemonProps {
	id: number;
	name: string;
	image: string;
	weight: number;
}

export function CardPokemon({ id, name, image, weight }: CardPokemonProps) {
	const titleHeight = name.length > 30 ? '100px' : 'auto';

	return (
		<Card
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				backgroundColor: 'transparent',
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
						variant='h5'
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
							color: 'text.secondary',
							textAlign: 'center',
						}}>
						Peso: {weight.toFixed(2)} kg
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
					sx={{ width: '100%' }}>
					Veja mais
				</Button>
			</CardActions>
		</Card>
	);
}
