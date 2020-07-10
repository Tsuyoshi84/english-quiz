<script>
  import { createEventDispatcher } from "svelte";
  import SpeechButton from "./SpeechButton.svelte";

  export let body = "";
  export let meaning = "";
  export let example = "";

  $: queryParam = encodeURIComponent(example);

  function speechExample() {
    speech(example);
  }

  const dispatch = createEventDispatcher();

  function showNext() {
    dispatch("next", {});
  }
</script>

<style type="text/scss">
  @import "_variables.scss";
  @import "_mixins.scss";

  section {
    box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 10px 2px;
    border-radius: 10px;
    padding: 1.5em;
    max-width: 420px;
    margin: 0 auto;
    height: clamp(300px, calc(100vh - 40px), 450px);
    position: relative;
  }

  h1 {
    margin-block-start: 1rem;
    font-size: 2.2rem;
    font-weight: bold;
    color: $primary-color;
  }

  .meaning {
    font-size: 1.4rem;
    text-align: left;
  }

  .example {
    font-size: 1.2rem;
    font-style: italic;
    font-weight: lighter;
    color: #000;
    text-align: left;
  }

  .speech-button-wrapper {
    text-align: right;
    font-size: 1.2em;
  }

  .next-button-wrapper {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;

    .next-button {
      @include button;
      font-size: 2em;
      padding: 0.5rem 2rem;
      margin: 0 auto 1rem;
    }
  }
</style>

<section>
  <h1>{body}</h1>
  <p class="meaning">{meaning}</p>
  <p class="example">{example}</p>
  <div class="speech-button-wrapper">
    <SpeechButton text={example} />
  </div>
  <div class="next-button-wrapper">
    <button class="next-button" on:click={showNext}>Next</button>
  </div>
</section>
