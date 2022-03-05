<script lang="ts">
  import { fly, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import PhraseCard from './PhraseCard.svelte';
  import type { Phrase } from './phrase-helper';

  export let body: string = '';
  export let meaning: string = '';
  export let examples: string[] = [];
  export let next: boolean = true;
  export let canBack: boolean = true;

  const duration = 500;

  let phrase1Visible = true;

  let phrase1: Phrase = { body: '', meaning: '', examples: [] };
  let phrase2: Phrase = { body: '', meaning: '', examples: [] };

  function appear(node: Element, _config: any) {
    if (next) {
      return fly(node, { y: 600, opacity: 1, duration });
    } else {
      return scale(node, {
        opacity: 0.5,
        start: 0.5,
        easing: quintOut,
        duration,
      });
    }
  }

  function disappear(node: Element, _config: any) {
    if (next) {
      return scale(node, {
        opacity: 0.5,
        start: 0.5,
        easing: quintOut,
        duration,
      });
    } else {
      return fly(node, { y: 600, opacity: 1, duration });
    }
  }

  function setZIndex() {
    if (!next) {
      const id = phrase1Visible ? '#card-holder-2' : '#card-holder-1';
      const el = document.querySelector(id);
      if (el) {
        (el as HTMLElement).style['z-index'] = 12;
      }
    }
  }

  $: {
    if (phrase1Visible) {
      phrase2 = { body, meaning, examples };
    } else {
      phrase1 = { body, meaning, examples };
    }

    phrase1Visible = !phrase1Visible;
    setZIndex();
  }
</script>

<div class="card-container">
  {#if phrase1Visible}
    <div id="card-holder-1" class="card-holder" in:appear out:disappear>
      <PhraseCard {...phrase1} {canBack} on:next on:back />
    </div>
  {:else}
    <div
      id="card-holder-2"
      class="card-holder"
      class:above={phrase1Visible && next}
      in:appear
      out:disappear
    >
      <PhraseCard {...phrase2} {canBack} on:next on:back />
    </div>
  {/if}
</div>

<style lang="postcss">
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

  .above {
    z-index: 1000;
  }
</style>
