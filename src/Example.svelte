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
  @import "_variables.scss";

  p {
    font-size: 1.2rem;
    font-style: italic;
    font-weight: lighter;
    color: #000;
    text-align: left;
    min-height: 4rem;
  }

  button {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.3rem;
    text-align: center;
    background-color: #fff;
    border: 1px solid #ccc;
    margin: 0.4rem;
    cursor: pointer;
    border-radius: 50%;

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
  <p>{examples[selectedIndex]}</p>
  {#if examples.length > 1}
    {#each examples as e, i}
      <button
        class:selected={selectedIndex === i}
        on:click={() => selectExample(i)} />
    {/each}
  {/if}
</div>
