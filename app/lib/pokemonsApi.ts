import axios from 'axios';
import { IPokemon, IPokemonDetails } from '../types/pokemons';

export interface IPokemonApiResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: IPokemon[];
}

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemons = async (limit = 20): Promise<IPokemon[] | []> => {
	try {
		const response = await axios.get<IPokemonApiResponse>(`${API_URL}?limit=${limit}`);
		return response.data.results;
	} catch (error) {
		console.log('Error fetching pokemons:', error);
		return [];
	}
};

export const getPokemonDetails = async (url: string): Promise<IPokemonDetails | null> => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.log('Error fetching pokemon details:', error);
		return null;
	}
};
