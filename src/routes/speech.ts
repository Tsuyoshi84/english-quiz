export function supportsSpeech(): boolean {
	return window.speechSynthesis !== undefined;
}

export function speak(text: string): SpeechSynthesis | undefined {
	if (!supportsSpeech()) return undefined;

	const utterance = new SpeechSynthesisUtterance(text);
	const voice = speechSynthesis.getVoices().find((v) => v.lang === 'en-US');
	if (voice) {
		utterance.voice = voice;
	}
	speechSynthesis.speak(utterance);

	return speechSynthesis;
}
