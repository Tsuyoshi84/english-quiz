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
    display: flex;
    flex-direction: column;
    padding: var(--size-3);
    margin: 0 auto;
    background-color: var(--gray-8);
    border-radius: var(--radius-3);
    box-shadow: var(--box-shadow-color) 1px 1px 10px 2px;
    max-inline-size: 420px;
    min-block-size: 500px;
  }

  .phrase {
    color: var(--orange-1);
    font-family: var(--font-nunito);
    font-size: var(--font-size-5);
    font-weight: var(--font-weight-5);
    margin-block-end: var(--size-3);
    margin-block-start: var(--size-3);
    text-shadow: 0 0 var(--font-size-1) var(--orange-5),
      0 0 var(--font-size-2) var(--orange-8);
  }

  .meaning {
    font-family: var(--font-nunito);
    font-size: var(--font-size-3);
    margin-block-end: var(--size-3);
    margin-block-start: var(--size-3);
    text-align: start;
  }

  .next-button-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    grid-gap: var(--size-3);
    margin-block-start: var(--size-3);
  }

  .next-button-wrapper .next-button {
    padding: var(--size-2) var(--size-7);
    border: none;
    background-color: var(--indigo-8);
    border-radius: var(--radius-4);
    color: var(--white-5);
    font-family: var(--font-nunito);
    font-size: var(--font-size-5);
    transition: all 0.2s var(--ease-in-out-3);
  }

  .next-button-wrapper .next-button:disabled {
    cursor: initial;
    filter: saturate(0%);
  }

  .next-button-wrapper .next-button:not(:disabled):hover {
    padding: var(--size-2) var(--size-7);
    cursor: pointer;
  }

  .next-button-wrapper .next-button:not(:disabled):active {
    background: none;
  }

  .next-button-wrapper .next-button:not(:disabled):focus {
    outline: 0;
  }
</style>
