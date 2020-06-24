<script>
  import { onDestroy } from "svelte";

  export let text = "";

  let isPlaying = false;

  function isSpeechAvailable() {
    return window.speechSynthesis !== undefined;
  }

  function play() {
    if (isSpeechAvailable()) {
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = speechSynthesis.getVoices().find(v => v.lang === "en-US");

      if (voice) {
        utterance.voice = voice;
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
