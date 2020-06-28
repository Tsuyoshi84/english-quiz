<script>
  import { onDestroy } from "svelte";

  export let text = "";

  let isPlaying = false;

  function isSpeechAvailable() {
    return window.speechSynthesis !== undefined;
  }

  async function play() {
    if (isSpeechAvailable()) {
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = await asyncGetVoices();
      const englishVoices = voices
        .filter(v => v.lang.startsWith("en"))
        .sort((v1, v2) => (v1.lang > v2.lang ? 1 : -1));

      if (englishVoices.length > 0) {
        utterance.voice = englishVoices[0];
      }

      speechSynthesis.speak(utterance);
      isPlaying = true;

      utterance.onend = () => {
        isPlaying = false;
      };
    }
  }

  function stop() {
    speechSynthesis.cancel();
  }

  function handleClick() {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
  }

  async function asyncGetVoices() {
    // Since it takes a while to load voices, call getVoices function once beforehand
    const _voices = speechSynthesis.getVoices();

    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve(speechSynthesis.getVoices());
      }, 100);
    });
  }

  onDestroy(() => stop());
</script>

<style type="text/scss">
  @import "_mixins.scss";

  button {
    @include button;
  }
</style>

<button on:click={handleClick}>
  {#if isPlaying}Stop{:else}Speech{/if}
</button>
