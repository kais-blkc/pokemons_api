'use client';

import './PokemonList.scss';
import { PokemonDetails } from '@/app/components/PokemonDetails/PokemonDetails';
import { getPokemonDetails, getPokemons } from '@/app/lib/pokemonsApi';
import { IPokemon, IPokemonDetails } from '@/app/types/pokemons';
import { FC, useEffect, useState } from 'react';
import { Chip } from '@mui/material';
import { Loading } from '../Loading/Loading';

export const PokemonList: FC = () => {
	const [pokemons, setPokemons] = useState<IPokemon[]>([]);
	const [selectedPokemon, setSelectedPokemon] = useState<IPokemonDetails | null>(null);
	const [selectedPokemonName, setSelectedPokemonName] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);

	const pokemonDetail = async (pokemon: IPokemon) => {
		const details = await getPokemonDetails(pokemon.url);

		setSelectedPokemon(details);
		setSelectedPokemonName(details?.name || '');
		setLoading(false);
	};

	// Get pokemon list
	useEffect(() => {
		const fetchPokemons = async () => {
			const data = await getPokemons(10);
			setPokemons(data);
		};

		fetchPokemons();
	}, []);

	// Get first pokemon
	useEffect(() => {
		if (pokemons.length > 0) {
			pokemonDetail(pokemons[0]);
		}
	}, [pokemons]);

	return (
		<div className="container pokemon-list-container">
			<div className="pokemon-list">
				{pokemons.map((pokemon, index) => (
					<Chip
						color="primary"
						key={index}
						label={pokemon.name}
						onClick={() => pokemonDetail(pokemon)}
						style={{ margin: 4 }}
						variant={pokemon.name === selectedPokemonName ? 'outlined' : 'filled'}
						className="chip-btn"
					/>
				))}
			</div>

			{loading && <Loading></Loading>}
			{selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}
		</div>
	);
};
