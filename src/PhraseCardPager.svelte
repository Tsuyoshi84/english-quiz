<script>
  import { fly, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import PhraseCard from './PhraseCard.svelte';

  export let body = '';
  export let meaning = '';
  export let examples = [];

  const duration = 500;
  const inTransition = { y: 500, opacity: 1, duration };
  const outTransition = { opacity: 0.5, start: 0.5, easing: quintOut, duration };

  let phrase1Visible = true;
  let phrase1 = { body: '', meaning: '', examples: [] };
  let phrase2 = { body: '', meaning: '', examples: [] };

  $: {
    if (phrase1Visible) {
      phrase2 = { body, meaning, examples };
    } else {
      phrase1 = { body, meaning, examples };
    }

    phrase1Visible = !phrase1Visible;
  }
</script>

<style>
  .card-container {
    position: relative;
    inline-size: 100%;
    block-size: 100%;
  }

  .card-holder {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    inline-size: 100%;
  }
</style>

<div class="card-container">
  {#if phrase1Visible}
    <div class="card-holder" in:fly={inTransition} out:scale={outTransition}>
      <PhraseCard {...phrase1} on:next />
    </div>
  {:else}
    <div class="card-holder" in:fly={inTransition} out:scale={outTransition}>
      <PhraseCard {...phrase2} on:next />
    </div>
  {/if}
</div>
