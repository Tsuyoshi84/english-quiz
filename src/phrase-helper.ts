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

export function fetchRandomPhrase(): Phrase {
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  phrase.examples = shuffle(phrase.examples);
  return phrase;
}
