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
  @import 'open-props/syle';

  .example-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-end;
  }

  .example {
    position: relative;
    display: flex;
    min-height: var(--size-7);
    align-items: center;
    justify-content: center;
    padding: var(--size-2) var(--size-3);
    border: 1px solid var(--gray-6);
    background: var(--gray-7);
    border-radius: var(--radius-3);
    color: var(--gray-1);
    font-family: var(--font-overlock);
    font-size: var(--font-size-3);
    margin-block-end: var(--size-3);
    margin-block-start: var(--size-2);
    transition: color, 0.2s var(--ease-2);
    user-select: none;
    white-space: pre-wrap;
  }

  .example:hover {
    color: var(--gray-4);
    cursor: pointer;
  }

  .button-container {
    display: flex;
    justify-content: center;
  }
</style>
