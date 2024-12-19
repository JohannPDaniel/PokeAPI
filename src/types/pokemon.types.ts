export interface Root {
	count: number;
	next: string | null; 
	previous: string | null; 
	results?: Array<Result>;
}

export interface Result {
	name: string;
	url: string;
}
