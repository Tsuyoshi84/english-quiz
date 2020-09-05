<script>
  import { createEventDispatcher } from 'svelte';
  import Example from './Example.svelte';

  export let body = '';
  export let meaning = '';
  export let examples = [];

  $: example = examples[0];
  $: queryParam = encodeURIComponent(example);

  function speechExample() {
    speech(example);
  }

  const dispatch = createEventDispatcher();

  function showNext() {
    dispatch('next', {});
  }
</script>

<style type="text/scss">
  @import '_variables.scss';
  @import '_mixins.scss';

  .card-section {
    box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 10px 2px;
    border-radius: 10px;
    padding: 1.5rem;
    max-inline-size: 420px;
    margin: 0 auto;
    block-size: calc(100vh - 5rem);
    block-size: clamp(300px, calc(100vh - 5rem), 500px);
    display: flex;
    flex-direction: column;
  }

  .phrase {
    margin-block-start: 1rem;
    font-size: 2.2rem;
    font-weight: bold;
    color: $primary-color;
  }

  .meaning {
    font-size: 1.4rem;
    text-align: start;
  }

  .next-button-wrapper {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .next-button {
      @include button;
      font-size: 2em;
      padding: 0.5rem 2rem;
    }
  }
</style>

<section class="card-section">
  <h1 class="phrase">{body}</h1>
  <p class="meaning">{meaning}</p>
  <Example {examples} />
  <div class="next-button-wrapper"><button class="next-button" on:click={showNext}>Next</button></div>
</section>
