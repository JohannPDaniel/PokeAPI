import { Type } from '../../types/pokemonDetails.types';
import { typeColors } from './typeColors';

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

export const getCardStyle = (types: Type[]) => ({
	background: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		color: 'white',
		background: getCardBackground(types),
		backgroundSize: 'cover',
		boxShadow: 'none',
	},
	name: {
		textAlign: 'center',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	},
});