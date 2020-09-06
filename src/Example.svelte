<script>
  import FaceButton from './FaceButton.svelte';

  export let examples = [];

  let selectedIndex = 0;
  let exampleTipPosition = '50%';
  const faceButtonGap = 4.1;

  function selectExample(index) {
    selectedIndex = index;

    updateTipPosition();
  }

  function updateTipPosition() {
    let baseOffset = ((faceButtonGap * (examples.length - 1)) / 2) * -1;
    let offset = baseOffset + selectedIndex * faceButtonGap;
    exampleTipPosition = `calc(50% + ${offset}rem)`;
  }

  $: {
    selectedIndex = 0;
    updateTipPosition();
  }
</script>

<style type="text/scss">
  @import '_variables.scss';

  $example-background-color: #fff;
  $example-border-color: #ccc;

  .example {
    font-family: 'Overlock', cursive;
    font-size: 1.2rem;
    position: relative;
    background: $example-background-color;
    border: 1px solid $example-border-color;
    padding: 0.5rem;
    border-radius: 0.5rem;
    min-height: 4.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block-start: 0.5em;
    margin-block-end: 1.2em;

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
      border-color: transparent;
      border-top-color: $example-background-color;
      border-width: 1rem;
      margin-left: -1rem;
    }
    &:before {
      border-color: transparent;
      border-top-color: $example-border-color;
      border-width: calc(1rem + 1px);
      margin-left: calc(-1rem - 1px);
    }
  }

  .button-container {
    display: flex;
    grid-gap: 1rem;
    justify-content: center;
  }
</style>

<div>
  <p class="example" style="--tip-potition: {exampleTipPosition}">{examples[selectedIndex]}</p>
  <div class="button-container">
    {#each examples as e, i}
      <FaceButton selected={selectedIndex === i} type={`type${i + 1}`} on:click={() => selectExample(i)} />
    {/each}
  </div>
</div>
