export type Mode = 'phrase' | 'word';

export interface Phrase {
	id: number;
	examples: string[];
	body: string;
	meaning: string;
}
