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
    font-size: 2.5rem;
    font-weight: bold;
  }

  .meaning {
    font-size: 1.4rem;
    color: #040;
    background-color: #eaffea;
    border-radius: 5px;
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
    border: solid 1px #ddd;
    background-color: #fafafa;
    font-size: 2em;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 0.5rem 2rem;
    margin: 0 auto 1rem;
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
