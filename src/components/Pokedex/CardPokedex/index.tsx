import { Button, Card, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Type } from '../../../types/pokemonDetails.types';
import { ContentCard } from "../../Home/ContentCard";
import { typeColors } from "../../../utils/typeColors";

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
    

	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				color: 'white',
				background: getCardBackground(types),
				backgroundSize: 'cover',
				boxShadow: 'none',
				width: '100%',
				minWidth: "100%", // Ajusta o tamanho mínimo
				maxWidth: '100%', // Remove limite fixo na largura
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
