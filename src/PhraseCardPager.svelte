<script>
  import { fly } from "svelte/transition";
  import PhraseCard from "./PhraseCard.svelte";

  export let body = "";
  export let meaning = "";
  export let example = "";

  const inTransition = { y: 200, duration: 300 };
  const outTransition = { y: -200, duration: 300 };

  let phrase1Visible = true;
  let phrase1 = { body: "", meaning: "", example: "" };
  let phrase2 = { body: "", meaning: "", example: "" };

  $: {
    if (phrase1Visible) {
      phrase2 = { body, meaning, example };
    } else {
      phrase1 = { body, meaning, example };
    }

    phrase1Visible = !phrase1Visible;
  }
</script>

<style>
  .card-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .card-holder {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    width: 100%;
  }
</style>

<div class="card-container">
  {#if phrase1Visible}
    <div class="card-holder" in:fly={inTransition} out:fly={outTransition}>
      <PhraseCard {...phrase1} on:next />
    </div>
  {:else}
    <div class="card-holder" in:fly={inTransition} out:fly={outTransition}>
      <PhraseCard {...phrase2} on:next />
    </div>
  {/if}
</div>
