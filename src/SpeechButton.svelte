<script>
  export let text = "";

  function isSpeechAvailable() {
    return window.speechSynthesis !== undefined;
  }

  function speech() {
    if (isSpeechAvailable()) {
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = speechSynthesis.getVoices().find(v => v.lang === "en-US");

      if (voice) {
        utterance.voice = voice;
      }

      speechSynthesis.speak(utterance);
    }
  }
</script>

<button on:click={speech}>Speech</button>
