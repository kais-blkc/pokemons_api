import './PokemonDetails.scss';
import { capitalizeFirstLetter } from '@/app/lib/helper';
import { IPokemonDetails } from '@/app/types/pokemons';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

interface IPokemonDetailsProps {
	pokemon: IPokemonDetails;
}

export const PokemonDetails: FC<IPokemonDetailsProps> = ({ pokemon }) => {
	return (
		<div className="pokemon-details">
			<Typography variant="h3" fontWeight="700">
				{capitalizeFirstLetter(pokemon.name)}
			</Typography>

			<div className="pokemon-details__img">
				<Image
					loader={() => pokemon.sprites.front_shiny}
					src={pokemon.sprites.front_shiny}
					alt={pokemon.name}
					width={400}
					height={400}
					unoptimized={true}
				/>
			</div>

			<div className="pokemon-details__params">
				<p>Снялся в {pokemon.moves.length} сериях </p>
				<p>id: {pokemon.id}</p>
				<p>height: {pokemon.height}</p>

				{pokemon.stats.map((stat, index) => {
					if (stat.stat.name !== 'attack') return;

					return (
						<p key={index}>
							{stat.stat.name}: {stat.base_stat}
						</p>
					);
				})}
			</div>
		</div>
	);
};
