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

<style>
  section {
    box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 6px 3px;
    border-radius: 10px;
    padding: 1.5em;
    max-width: 420px;
    margin: 0 auto;
    height: min(550px, calc(100vh - 40px));
    position: relative;
  }

  h1 {
    margin-block-start: 1rem;
    font-size: 2.5rem;
    font-weight: bold;
  }

  .meaning {
    font-size: 1.4rem;
    color: #060;
    border-inline-start: 5px solid;
    text-align: left;
    padding: 1rem;
  }

  .example {
    font-size: 1.4rem;
    font-style: italic;
    font-weight: lighter;
    color: #444;
    text-align: left;
  }

  .speech-button-wrapper {
    text-align: right;
    font-size: 1.2em;
  }

  .next-button {
    border: none;
    padding: 1rem;
    background: none;
    font-size: 2em;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }

  button:hover {
    cursor: pointer;
    color: #666;
  }

  button:active {
    background: none;
  }
</style>

<section>
  <h1>{body}</h1>
  <p class="meaning">{meaning}</p>
  <p class="example">{example}</p>
  <div class="speech-button-wrapper">
    <SpeechButton text={example} />
  </div>
  <button class="next-button" on:click={showNext}>Next</button>
</section>
