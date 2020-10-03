<script lang="ts">
  import FaceButton from './FaceButton.svelte';
  import { setNewLine } from './phrase-helper';

  export let examples: string[] = [];

  let selectedIndex: number = 0;
  let exampleTipPosition: string = '50%';
  let exampleText: string = '';
  const faceButtonGap = 4.1;

  function selectExample(index: number) {
    selectedIndex = index;
    updateTipPosition();
    setExample();
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
    speech(examples[selectedIndex]);
  }

  function speech(text: string) {
    if (isSpeechAvailable()) {
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = speechSynthesis.getVoices().find((v) => v.lang === 'en-US');
      if (voice) {
        utterance.voice = voice;
      }
      speechSynthesis.speak(utterance);
    }
  }

  function isSpeechAvailable(): boolean {
    return window.speechSynthesis !== undefined;
  }

  $: {
    selectedIndex = 0;
    updateTipPosition();
    setExample();
  }
</script>

<style type="text/scss">
  @import '_variables.scss';

  $example-border-color: #ccc;
  $example-border-color-dark: #666;

  .example-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-grow: 1;
  }

  .example {
    --background-color: #{$background-color};
    --border-color: #{$example-border-color};

    font-family: $example-font-family;
    font-size: 1.2rem;
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

    &:after,
    &:before {
      top: 100%;
      left: var(--tip-potition);
      border: solid transparent;
      content: ' ';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

    &:after {
      --background-color: #{$background-color};

      border-color: transparent;
      border-top-color: var(--background-color);
      border-width: 1rem;
      margin-left: -1rem;
    }
    &:before {
      border-color: transparent;
      border-top-color: $example-border-color;
      border-width: calc(1rem + 1px);
      margin-left: calc(-1rem - 1px);
    }

    &:hover {
      cursor: pointer;
      color: #888;
    }
  }

  .button-container {
    display: flex;
    justify-content: center;
  }

  @media (prefers-color-scheme: dark) {
    .example {
      --background-color: #{$background-color-dark};
      --border-color: #{$example-border-color-dark};

      &:after {
        --background-color: #{$background-color-dark};
      }
    }
  }
</style>

<div class="example-container">
  <p class="example" style="--tip-potition: {exampleTipPosition}" on:click={speechExample}>{exampleText}</p>
  <div class="button-container">
    {#each examples as _e, i}
      <FaceButton selected={selectedIndex === i} type={`type${i + 1}`} on:click={() => selectExample(i)} />
    {/each}
  </div>
</div>
