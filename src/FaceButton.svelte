<script>
  export let selected = true;
</script>

<style type="text/scss">
  .face {
    position: relative;
    background-color: #ccc;
    font-size: 4px;
    width: 12.5em;
    height: 12.5em;
    border-radius: 100%;
    cursor: pointer;

    &.selected {
      background-color: #ffdd40;
    }
  }

  .eyes {
    position: absolute;
    left: 2.6em;
    top: 3.6em;
  }

  .eye {
    position: absolute;
    background-color: black;
    width: 1.2em;
    height: 1.9em;
    border-radius: 100%;
    animation: eyes-blink 4.2s infinite alternate;

    &.left {
      left: 0em;
    }

    &.right {
      left: 2.8em;
    }
  }

  .mouth {
    position: absolute;
    background-color: black;
    top: 7em;
    left: 3.2em;
    width: 3.2em;
    height: 0.2em;
    border-radius: 2.2em 2.2em 2em 2em;
    animation: mounth-shape 2s infinite alternate;
  }

  @keyframes eyes-blink {
    0% {
      height: 1.9em;
      top: 0;
    }
    98% {
      height: 1.9em;
      top: 0;
    }
    100% {
      height: 0.1em;
      top: 1em;
    }
  }

  @keyframes mounth-shape {
    0% {
      border-radius: 0.2em 0.2em 2em 2em;
      width: 3.2em;
      height: 2em;
    }
    90% {
      border-radius: 0.2em 0.2em 2em 2em;
      width: 3.2em;
      height: 2em;
    }
    100% {
      border-radius: 1em 1em 2em 2em;
      width: 2.8em;
      height: 1em;
    }
  }
</style>

<div class="face" on:click class:selected>
  <div class="eyes">
    <div class="eye left" />
    <div class="eye right" />
  </div>
  <div class="mouth" />
</div>
