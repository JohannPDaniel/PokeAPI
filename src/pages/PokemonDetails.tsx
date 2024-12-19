import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
	Box,
	Typography,
	CircularProgress,
	Button,
	Card,
	CardContent,
	CardMedia,
	List,
	ListItem,
	ListItemText,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { getPokemonDetailAsyncThunk } from '../store/modules/getPokemonDetailSlice/getPokemonDetail.action';

export const PokemonDetails = () => {
	// Captura o parâmetro da URL
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	// Estado do Redux para detalhes do Pokémon
	const {
		loading,
		error,
		data: pokemonDetail,
	} = useAppSelector((state) => state.getPokemonDetail);

	// Busca os detalhes do Pokémon com base no ID
useEffect(() => {
	if (id) {
		console.log('Chamando getPokemonDetailAsyncThunk com ID:', id);
		dispatch(getPokemonDetailAsyncThunk(id));
	} else {
		console.log('ID não encontrado em useParams');
	}
}, [id, dispatch]);

	// Carregando
	if (loading) {
		return (
			<Box
				display='flex'
				justifyContent='center'
				alignItems='center'
				height='100vh'>
				<CircularProgress />
			</Box>
		);
	}

	// Erro
	if (error || !pokemonDetail) {
		return (
			<Box
				textAlign='center'
				marginTop={4}>
				<Typography
					variant='h6'
					color='error'>
					Erro ao carregar os detalhes do Pokémon.
				</Typography>
				<Button
					variant='contained'
					onClick={() => navigate('/')}>
					Voltar
				</Button>
			</Box>
		);
	}

	// Exibe os detalhes do Pokémon
	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			margin={4}
			padding={2}
			borderRadius={2}
			boxShadow={3}
			sx={{ backgroundColor: '#f5f5f5' }}>
			<Card sx={{ maxWidth: 400 }}>
				<CardMedia
					component='img'
					height='300'
					image={pokemonDetail.sprite}
					alt={pokemonDetail.name}
				/>
				<CardContent>
					<Typography
						variant='h4'
						component='h1'
						align='center'
						gutterBottom>
						{pokemonDetail.name}
					</Typography>
					<Typography
						variant='subtitle1'
						align='center'>
						ID: {pokemonDetail.id}
					</Typography>
					<Box marginY={2}>
						<Typography
							variant='h6'
							gutterBottom>
							Habilidades:
						</Typography>
						<List>
							{pokemonDetail.abilities.map((ability) => (
								<ListItem key={ability}>
									<ListItemText primary={ability} />
								</ListItem>
							))}
						</List>
					</Box>
				</CardContent>
			</Card>
			<Box marginTop={2}>
				<Button
					variant='contained'
					color='primary'
					onClick={() => navigate('/')}
					sx={{ textTransform: 'none' }}>
					Voltar
				</Button>
			</Box>
		</Box>
	);
};
