export interface IPokemon {
	name: string;
	url: string;
}

export interface IPokemonDetails {
	id: number;
	name: string;
	height: number;
	weight: number;
	base_experience: number;

	sprites: {
		front_default: string;
		front_shiny: string;
	};

	stats: {
		base_stat: number;
		effort: number;
		stat: {
			name: string;
			url: string;
		};
	}[];

	moves: {}[];
}
