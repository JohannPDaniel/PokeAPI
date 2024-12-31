import { Backdrop } from '@mui/material';
import backDropPokemons from '../../assets/backDropPokemons.gif';

export const BackdropMui = () => {
	return (
		<Backdrop
			open
			sx={{
				backgroundColor: 'rgba(255, 255, 0, 0.5)',
				backdropFilter: 'blur(18px)',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: 999,
			}}>
			<img
				src={backDropPokemons}
				alt='Carregando Pokémons'
				style={{
					clipPath: 'circle(14%)',
					zIndex: 999,
				}}
			/>
		</Backdrop>
	);
};
