<script lang="ts">
  import { onDestroy } from 'svelte';
  import FaceButton from './FaceButton.svelte';
  import { setNewLine } from './phrase-helper';
  import { speak } from './speech';

  export let examples: string[] = [];

  let selectedIndex: number = 0;
  let exampleTipPosition: string = '50%';
  let exampleText: string = '';
  let synthesis: SpeechSynthesis | null = null;
  const faceButtonGap = 4.1;

  onDestroy(() => {
    cancelSpeechExample();
  });

  function selectExample(index: number) {
    selectedIndex = index;
    updateTipPosition();
    setExample();
    cancelSpeechExample();
  }

  function updateTipPosition() {
    let baseOffset = ((faceButtonGap * (examples.length - 1)) / 2) * -1;
    let offset = baseOffset + selectedIndex * faceButtonGap;
    exampleTipPosition = `calc(50% + ${offset}rem)`;
  }

  function setExample() {
    exampleText = setNewLine(examples[selectedIndex]);
  }

  function speechExample() {
    synthesis = speak(examples[selectedIndex]);
  }

  function cancelSpeechExample() {
    if (synthesis) {
      synthesis.cancel();
      synthesis = null;
    }
  }

  $: {
    selectedIndex = 0;
    updateTipPosition();
    setExample();
  }
</script>

<div class="example-container">
  <p
    class="example"
    style="

--tip-potition: {exampleTipPosition}"
    on:click={speechExample}
  >
    {exampleText}
  </p>
  <div class="button-container">
    {#each examples as _e, i}
      <FaceButton
        selected={selectedIndex === i}
        type={`type${i + 1}`}
        on:click={() => selectExample(i)}
      />
    {/each}
  </div>
</div>

<style lang="postcss">
  .example-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-end;
  }

  .example {
    --background-color: #fff;
    --border-color: #ccc;

    position: relative;
    display: flex;
    min-height: 4.7rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border: 1px solid var(--border-color);
    background: var(--background-color);
    border-radius: 0.5rem;
    font-family: Overlock, Helvetica, cursive;
    font-size: 1.2rem;
    margin-block-end: 1.2em;
    margin-block-start: 0.5em;
    transition: color, 0.2s ease;
    user-select: none;
    white-space: pre-wrap;
  }

  .example::after,
  .example::before {
    position: absolute;
    top: 100%;
    left: var(--tip-potition);
    width: 0;
    height: 0;
    border: solid transparent;
    content: ' ';
    pointer-events: none;
  }

  .example::after {
    --background-color: #fff;

    border-width: 1rem;
    border-color: transparent;
    border-top-color: var(--background-color);
    margin-left: -1rem;
  }

  .example::before {
    border-width: calc(1rem + 1px);
    border-color: transparent;
    border-top-color: #ccc;
    margin-left: calc(-1rem - 1px);
  }

  .example:hover {
    color: #888;
    cursor: pointer;
  }

  .button-container {
    display: flex;
    justify-content: center;
  }
  @media (prefers-color-scheme: dark) {
    .example {
      --background-color: #333;
      --border-color: #666;
    }

    .example::after {
      --background-color: #333;
    }
  }
</style>
