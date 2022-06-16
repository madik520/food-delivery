import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#618967'
		},
		secondary: {
			main: '#72A479'
		},
		error: {
			main: red.A400
		}
	},
	typography: {
		h1: {
			fontFamily: 'Zing, sans-serif',
			fontSize: 67,
			color: '#fff'
		},
		h2: {
			fontFamily: 'GilroyBold, sans-serif',
			fontSize: 32,
			color: '#fff'
		},
		h3: {
			fontFamily: 'GilroyReg, sans-serif',
			fontSize: 22,
			color: '#fff'
		},
		h4: {
			fontFamily: 'GilroyReg, sans-serif',
			fontSize: 18,
			color: '#fff'
		},
		body1: {
			fontFamily: 'GilroyReg, sans-serif',
			fontSize: 13
		}
	}
});

export default theme;
