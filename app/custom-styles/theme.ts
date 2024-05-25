'use client';

import { raleway } from '@/app/custom-styles/fonts';
import { createTheme, responsiveFontSizes } from '@mui/material';

export const theme = createTheme({
	typography: {
		fontFamily: raleway.style.fontFamily,
	},
});

theme.typography.h3 = {
	fontSize: '3rem',
	[theme.breakpoints.down('sm')]: {
		fontSize: '2rem',
	},
};
