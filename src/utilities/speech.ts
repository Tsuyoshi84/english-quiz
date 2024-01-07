import { shuffle } from './shuffle';

export function supports_speech(): boolean {
	if (window === undefined) return false;
	return window?.speechSynthesis !== undefined;
}

export function populate_voices(): void {
	if (!supports_speech()) return;

	speechSynthesis.onvoiceschanged = () => {
		voices = undefined;
	};
}

let voices: readonly SpeechSynthesisVoice[] | undefined = undefined;
function get_voices(): readonly SpeechSynthesisVoice[] {
	if (voices !== undefined) return voices;

	// Get all English voices
	const english_voices = speechSynthesis.getVoices().filter((v) => v.lang.startsWith('en-'));

	if (english_voices.length === 0) {
		voices = [];
	} else {
		// Set non-local voices as preferred
		const non_local_voices = english_voices.filter((v) => v.localService === false);
		voices = non_local_voices.length > 0 ? non_local_voices : english_voices;
	}

	return voices;
}

export function speak(text: string): SpeechSynthesis | undefined {
	if (!supports_speech()) return undefined;

	const utterance = new SpeechSynthesisUtterance(text);

	// Set the voice to a random English voice
	utterance.voice = shuffle(get_voices())[0] ?? null;

	speechSynthesis.speak(utterance);

	return speechSynthesis;
}
