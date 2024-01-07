import { shuffle } from '../routes/util';

export function supportsSpeech(): boolean {
	if (window === undefined) return false;
	return window?.speechSynthesis !== undefined;
}

export function populateVoices(): void {
	if (!supportsSpeech()) return;

	speechSynthesis.onvoiceschanged = () => {
		voices = undefined;
	};
}

let voices: readonly SpeechSynthesisVoice[] | undefined = undefined;
function getVoices(): readonly SpeechSynthesisVoice[] {
	if (voices !== undefined) return voices;

	// Get all English voices
	const englishVoices = speechSynthesis.getVoices().filter((v) => v.lang.startsWith('en-'));

	if (englishVoices.length === 0) {
		voices = [];
	} else {
		// Set non-local voices as preferred
		const nonLocalVoices = englishVoices.filter((v) => v.localService === false);
		voices = nonLocalVoices.length > 0 ? nonLocalVoices : englishVoices;
	}

	return voices;
}

export function speak(text: string): SpeechSynthesis | undefined {
	if (!supportsSpeech()) return undefined;

	const utterance = new SpeechSynthesisUtterance(text);

	// Set the voice to a random English voice
	utterance.voice = shuffle(getVoices())[0] ?? null;

	speechSynthesis.speak(utterance);

	return speechSynthesis;
}
