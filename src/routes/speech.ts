export function supportsSpeech(): boolean {
	return window.speechSynthesis !== undefined;
}

export function speak(text: string): SpeechSynthesis | null {
	if (!supportsSpeech()) return null;

	const utterance = new SpeechSynthesisUtterance(text);
	const voice = speechSynthesis.getVoices().find((v) => v.lang === 'en-US');
	if (voice) {
		utterance.voice = voice;
	}
	speechSynthesis.speak(utterance);

	return speechSynthesis;
}
