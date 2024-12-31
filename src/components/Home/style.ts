import wallpaper from '../../assets/wallpaper.png';

export const style = {
	wallPaperPokemon: {
		width: '100%',
		maxWidth: 300,
		alignSelf: 'center',
		marginBlock: 3,
		animation: 'pulse 1.3s infinite',
		'@keyframes pulse': {
			'0%': { transform: 'scale(1)' },
			'50%': { transform: 'scale(1.3)' },
			'100%': { transform: 'scale(1)' },
		},
	},
	wallPaper: {
		height: 'auto',
		minHeight: '100vh',
		backgroundImage: `url(${wallpaper})`,
		backgroundSize: 'contain',
		backgroundPosition: 'bottom',
		backgroundRepeat: 'no-repeat',
	},
	input: {
		display: 'flex',
		py: 4
	},
	card: {
		display: 'flex',
		justifyContent: 'center',
		padding: { xs: 0, sm: 8, md: 4, lg: 2 },
	},
	pagination: {
		pb: { xs: 16, sm: 28, md: 22, lg: 30 },
		pt: 6,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
};
