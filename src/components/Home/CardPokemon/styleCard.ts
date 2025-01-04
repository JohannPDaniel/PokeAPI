import { Type } from '../../../types/pokemonDetails.types';
import { typeColors } from '../../../utils/typeColors';
import { keyframes } from '@emotion/react';

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
		animation: `${fadeInUp} 0.8s ease-out`,
		transition: 'opacity 0.4s, transform 0.4s',
	},
	name: {
		textAlign: 'center',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		textTransform: 'capitalize',
	},
});
