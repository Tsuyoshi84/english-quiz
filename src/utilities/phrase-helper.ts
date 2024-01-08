import { phrases } from '../data/phrases';
import { words } from '../data/words';
import type { Mode, Phrase } from '../types';
import { shuffle } from './shuffle';

export function fetch_phrases(mode: Mode): Phrase[] {
	const data = mode === 'phrase' ? phrases : words;

	return shuffle(data).map(({ body, meaning, examples }) => {
		return {
			body,
			meaning,
			examples: shuffle(examples)
		};
	});
}

export function set_new_line(text: string): string {
	const matches = text.match(/"(?:[^"\\]|\\.)*"/g);
	if (matches === null || matches.length === 0) return text;

	let new_text = text;
	for (const match of matches) {
		new_text = new_text.replace(match, `\n${match}`);
	}

	return new_text.trim();
}
