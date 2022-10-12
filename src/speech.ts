export function isSpeechAvailable(): boolean {
	return window.speechSynthesis !== undefined;
}

export function speak(text: string): SpeechSynthesis | null {
	if (isSpeechAvailable()) {
		const utterance = new SpeechSynthesisUtterance(text);
		const voice = speechSynthesis.getVoices().find((v) => v.lang === 'en-US');
		if (voice) {
			utterance.voice = voice;
		}
		speechSynthesis.speak(utterance);

		return speechSynthesis;
	}

	return null;
}
