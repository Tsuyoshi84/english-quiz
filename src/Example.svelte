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

    &:after,
    &:before {
      top: 100%;
      left: 50%;
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
  {#each examples as e, i}<button class="example-button" class:selected={selectedIndex === i} on:click={() => selectExample(i)} />{/each}
</div>
