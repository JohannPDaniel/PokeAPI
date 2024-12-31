export const styleSlideShowRight = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		margin: 'auto',
	},
	slide: {
		position: 'relative',
		textAlign: 'center',
	},
	image: {
		width: '100%',
		borderRadius: '5px',
	},
	caption: {
		fontSize: '15px',
		fontWeight: '700',
		padding: '8px 12px',
		position: 'absolute',
		bottom: '-15px',
		width: '100%',
		textAlign: 'center',
	},
	dotsContainer: {
		textAlign: 'center',
		marginTop: '15px',
	},
	dot: {
		cursor: 'pointer',
		height: '15px',
		width: '15px',
		margin: '0 2px',
		borderRadius: '50%',
		display: 'inline-block',
		transition: 'background-color 0.6s ease',
	},
};

export const getBackgroundColor = (caption: string) => {
	switch (caption) {
		case 'Bulbasaur':
			return {
				background: '#0e9417',
				nome: '#201a8d',
				default: '#65e674',
			};
		case 'Squirtle':
			return {
				background: '#0015ff',
				nome: '#dbed3d',
				default: '#57b2e0',
			};
		case 'Ninetales':
			return {
				background: '#fffc30',
				nome: '#d36a44',
				default: '#e5fa89',
			};
		default:
			return {
				background: '#000',
				default: '#bbb',
			};
	}
};

export const images = [
    {
        src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        caption: 'Bulbasaur',
    },
    {
        src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
        caption: 'Squirtle',
    },
    {
        src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png',
        caption: 'Ninetales',
    },
];
