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
    <button class="next-button" on:click={goBack} disabled={!canBack}>Back</button>
    <button class="next-button" on:click={showNext}>Next</button>
  </div>
</section>

<style type="text/scss">
  @import '_variables.scss';
  @import '_mixins.scss';

  .card-section {
    --background-color: #{$background-color};
    --box-shadow-color: rgba(0, 0, 0, 0.1);

    box-shadow: var(--box-shadow-color) 1px 1px 10px 2px;
    border-radius: 10px;
    padding: 1.5rem;
    max-inline-size: 420px;
    margin: 0 auto;
    min-block-size: 500px;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
  }

  .phrase {
    --color: #{$font-color-primary};

    font-family: 'Nunito', sans-serif;
    margin-block-start: 1rem;
    margin-block-end: 1rem;
    font-size: 2rem;
    font-weight: bold;
    color: var(--color);
  }

  .meaning {
    --color: #{$font-color-primary};

    font-family: 'Nunito', sans-serif;
    font-size: 1.4rem;
    text-align: start;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }

  .next-button-wrapper {
    margin-block-start: 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    grid-gap: 1rem;

    .next-button {
      @include button;
      font-family: 'Nunito', sans-serif;
      font-size: 2em;
      padding: 0.5rem 2rem;
      border-radius: 1em;
      transition: all 0.2s ease-in-out;

      &:not(:disabled) {
        &:hover {
          padding: 0.5rem 3rem;
        }
      }

      &:disabled {
        filter: saturate(0%);
        cursor: initial;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    .card-section {
      --background-color: #{$background-color-dark};
      --box-shadow-color: rgba(0, 0, 0, 0.5);
    }

    .phrase {
      --color: #{$font-color-primary-dark};
    }
  }
</style>
