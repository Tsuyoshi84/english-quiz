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
    style="--tip-potition: {exampleTipPosition}"
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
    justify-content: flex-end;
    flex-grow: 1;
  }
  .example {
    --background-color: #fff;
    --border-color: #ccc;
    font-family: 'Overlock', Helvetica, cursive;
    font-size: 1.2rem;
    user-select: none;
    position: relative;
    background: var(--background-color);
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    min-height: 4.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block-start: 0.5em;
    margin-block-end: 1.2em;
    padding: 0.5rem 1rem;
    white-space: pre-wrap;
    transition: color, 0.2s ease;
  }
  .example:after,
  .example:before {
    top: 100%;
    left: var(--tip-potition);
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
  .example:after {
    --background-color: #fff;
    border-color: transparent;
    border-top-color: var(--background-color);
    border-width: 1rem;
    margin-left: -1rem;
  }
  .example:before {
    border-color: transparent;
    border-top-color: #ccc;
    border-width: calc(1rem + 1px);
    margin-left: calc(-1rem - 1px);
  }
  .example:hover {
    cursor: pointer;
    color: #888;
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
    .example:after {
      --background-color: #333;
    }
  }
</style>
