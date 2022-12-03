import { phrases } from './phrases';
import { words } from './words';
import type { Mode } from './types';
import { shuffle } from './util';

export interface Phrase {
	examples: string[];
	body: string;
	meaning: string;
}

export function fetchPhrases(mode: Mode): Phrase[] {
	const data = mode === 'phrase' ? phrases : words;

	return shuffle(data).map(({ body, meaning, examples }) => {
		return {
			body,
			meaning,
			examples: shuffle(examples),
		};
	});
}

export function setNewLine(text: string): string {
	let matches = text.match(/"(?:[^"\\]|\\.)*"/g);
	if (matches === null || matches.length === 0) return text;

	let newText = text;
	for (const match of matches) {
		newText = newText.replace(match, `\n${match}`);
	}

	return newText.trim();
}
