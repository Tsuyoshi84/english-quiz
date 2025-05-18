import { shuffle } from './shuffle';
import { browser } from '$app/environment';

function supports_speech(): boolean {
	if (window === undefined) return false;
	return window?.speechSynthesis !== undefined;
}

/**
 * Populate the voices for the speech synthesis.
 */
export function populate_voices(): void {
	if (!supports_speech()) return;

	speechSynthesis.onvoiceschanged = () => {
		set_voices();
	};
}

let voices: readonly SpeechSynthesisVoice[] = [];
function set_voices(): void {
	// Get all English voices
	const english_voices = speechSynthesis.getVoices().filter((v) => v.lang.startsWith('en-'));

	if (english_voices.length === 0) {
		voices = [];
	} else {
		// Set non-local voices as preferred
		const non_local_voices = english_voices.filter((v) => v.localService === false);
		voices = non_local_voices.length > 0 ? non_local_voices : english_voices;
	}
}

/**
 * Read out loud the given text.
 * @param text - The text to read out loud.
 */
export function read_out_loud(text: string, options: { onend?: () => void } = {}): void {
	if (!supports_speech()) return;

	const { onend } = options;

	const utterance = new SpeechSynthesisUtterance(text);

	// Set the voice to a random English voice
	utterance.voice = shuffle(voices)[0] ?? null;

	if (onend) {
		utterance.onend = onend;
	}

	speechSynthesis.speak(utterance);
}

/**
 * Stop reading out loud.
 */
export function stop_reading(): void {
	if (!browser) return;

	speechSynthesis.cancel();
}
