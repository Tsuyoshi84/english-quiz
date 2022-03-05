<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Example from './Example.svelte';

  export let body: string = '';
  export let meaning: string = '';
  export let examples: string[] = [];
  export let canBack: boolean = true;

  $: example = examples[0];
  $: queryParam = encodeURIComponent(example);

  const dispatch = createEventDispatcher();

  function showNext() {
    dispatch('next', {});
  }

  function goBack() {
    dispatch('back', {});
  }
</script>

<section class="card-section">
  <h1 class="phrase">{body}</h1>
  <p class="meaning">{meaning}</p>
  <Example {examples} />
  <div class="next-button-wrapper">
    <button class="next-button" on:click={goBack} disabled={!canBack}
      >Back</button
    >
    <button class="next-button" on:click={showNext}>Next</button>
  </div>
</section>

<style lang="postcss">
  .card-section {
    --background-color: #fff;
    --box-shadow-color: rgb(0 0 0 / 10%);

    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    margin: 0 auto;
    background-color: var(--background-color);
    border-radius: 10px;
    box-shadow: var(--box-shadow-color) 1px 1px 10px 2px;
    max-inline-size: 420px;
    min-block-size: 500px;
  }

  .phrase {
    --color: #44f;

    color: var(--color);
    font-family: Nunito, sans-serif;
    font-size: 2rem;
    font-weight: bold;
    margin-block-end: 1rem;
    margin-block-start: 1rem;
  }

  .meaning {
    --color: #44f;

    font-family: Nunito, sans-serif;
    font-size: 1.4rem;
    margin-block-end: 0.5em;
    margin-block-start: 0.5em;
    text-align: start;
  }

  .next-button-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    grid-gap: 1rem;
    margin-block-start: 1rem;
  }

  .next-button-wrapper .next-button {
    padding: 0.5rem;
    padding: 0.5rem 2rem;
    border: none;
    background-color: #44a;
    border-radius: 1em;
    color: #fff;
    font-family: Nunito, sans-serif;
    font-size: 2em;
    transition: all 0.2s ease-in-out;
  }

  .next-button-wrapper .next-button:disabled {
    cursor: initial;
    filter: saturate(0%);
  }

  .next-button-wrapper .next-button:not(:disabled):hover {
    padding: 0.5rem 3rem;
    background-color: #6161c0;
    cursor: pointer;
  }

  .next-button-wrapper .next-button:not(:disabled):active {
    background: none;
  }

  .next-button-wrapper .next-button:not(:disabled):focus {
    outline: 0;
  }

  @media (prefers-color-scheme: dark) {
    .card-section {
      --background-color: #333;
      --box-shadow-color: rgb(0 0 0 / 50%);
    }

    .phrase {
      --color: #aaf;
    }
  }
</style>
