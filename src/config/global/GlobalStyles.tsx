import { CssBaseline, CSSObject, GlobalStyles } from '@mui/material';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';

const styles: Record<string, CSSObject> = {
	'*': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
		fontFamily: "'Poppins', sans-serif",
	},

	a: {
		textDecoration: 'none',
		color: 'black',

		'&:hover': {
			textDecoration: 'underline',
		},
	},
};

export function GlobalStyle() {
	return (
		<>
			<GlobalStyles styles={styles} />
			<CssBaseline />
		</>
	);
}
