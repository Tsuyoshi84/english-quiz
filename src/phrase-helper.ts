import { phrases } from './phrases';
import { shuffle } from './util';

export interface Phrase {
	examples: string[];
	body: string;
	meaning: string;
}

export function fetchPhrases(): Phrase[] {
	let shuffledPhrases = shuffle(phrases).map((p) => {
		return { ...p, ...{ examples: shuffle(p.examples) } };
	});

	return shuffledPhrases;
}

export function setNewLine(text: string): string {
	let matches = text.match(/"(?:[^"\\]|\\.)*"/g);

	if (matches !== null && matches.length > 1) {
		let newText = text;
		for (let i = 1; i < matches.length; i++) {
			let match = matches[i];
			newText = newText.replace(match, `\n${match}`);
		}

		return newText;
	} else {
		return text;
	}
}

export function fetchRandomPhrase(): Phrase {
	const phrase = phrases[Math.floor(Math.random() * phrases.length)];
	phrase.examples = shuffle(phrase.examples);
	return phrase;
}
