import { phrases } from './phrases';
import { shuffle } from './util';

export function fetchPhrases() {
  let shuffledPhrases = shuffle(phrases).map((p) => {
    return { ...p, ...{ examples: shuffle(p.examples) } };
  });

  return shuffledPhrases;
}

export function fetchRandomPhrase() {
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  phrases.examples = shuffle(phrase.examples);
  return phrase;
}
