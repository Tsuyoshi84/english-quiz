<script>
  export let examples = [];

  let selectedIndex = 0;

  function selectExample(index) {
    selectedIndex = index;
  }

  $: {
    selectedIndex = 0;
  }
</script>

<style type="text/scss">
  @import '_variables.scss';

  .example {
    font-size: 1.2rem;
    font-style: italic;
    font-family: 'Times New Roman', Georgia, serif;
    color: #000;
    text-align: center;
    min-block-size: 5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 0.5rem;
    box-shadow: 2px 2px 3px 2px #ccc;
  }

  .example-button {
    inline-size: 3rem;
    block-size: 3rem;
    border-radius: 50%;
    font-size: 1.3rem;
    text-align: center;
    background-color: #fff;
    border: 1px solid #ccc;
    margin: 0.5rem;
    cursor: pointer;

    &.selected {
      color: white;
      background-color: $primary-color;
      border: none;
    }

    &:focus {
      outline: none;
    }
  }
</style>

<div>
  <p class="example">{examples[selectedIndex]}</p>
  {#if examples.length > 1}
    {#each examples as e, i}<button class="example-button" class:selected={selectedIndex === i} on:click={() => selectExample(i)} />{/each}
  {/if}
</div>
