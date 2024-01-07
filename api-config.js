const env = process.env.NEXT_PUBLIC_ENV || 'development';

export const API_BASE_URL = 
	env === 'production' 
	? 'https://engineer-cv-api-s7hdwgqmca-an.a.run.app'
	: 'http://localhost:3000';
