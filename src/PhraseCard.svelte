<script>
  import { createEventDispatcher } from "svelte";

  export let body = "";
  export let meaning = "";
  export let example = "";

  $: queryParam = encodeURIComponent(example);

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
  }

  @media (max-width: 680px) {
    section {
      height: min(700px, 100%);
    }
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

  button {
    border: none;
    background: none;
    font-size: 2em;
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
  <p class="example">
    {example} (
    <a
      href="https://translate.google.com/?sl=en&tl=ja&text={queryParam}"
      target="_blank"
      rel="noopener">
      Translate
    </a>
    )
  </p>
  <button on:click={showNext}>Next</button>
</section>
