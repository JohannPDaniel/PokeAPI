export interface PokemonApiResponseTypes {
	count: number;
	next: string | null;
	previous: any;
	results?: Result[];
}

export interface Result {
	name: string;
	url: string;
}