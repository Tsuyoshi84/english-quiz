<script lang="ts">
  export let selected: boolean = true;
  export let type: string = 'type1';
</script>

<div class="face {type}" on:click class:selected>
  <div class="eyes">
    <div class="eye left" />
    <div class="eye right" />
  </div>
  <div class="mouth" />
</div>

<style lang="postcss">
  * {
    transition: all 0.2s ease-in-out;
  }
  .face {
    position: relative;
    font-size: 4px;
    width: 12.5em;
    height: 12.5em;
    border-radius: 100%;
    margin: 0 1em;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    -webkit-tap-highlight-color: transparent;

    & .eyes {
      position: absolute;
      left: 3.9em;
      top: 3.6em;

      & .eye {
        position: absolute;
        background-color: black;
        width: 1.2em;
        height: 1.9em;
        border-radius: 100%;
      }

      & .eye.left {
        left: 0em;
      }
      & .eye.right {
        left: 2.8em;
      }
    }

    & .mouth {
      position: absolute;
      background-color: black;
      top: 7em;
      left: 4.4em;
      width: 3.2em;
      height: 0.5em;
      border-radius: 0 0 2em 2em;
    }
  }

  .face.type1 .eye {
    animation: eyes-blink 4s infinite alternate;
  }
  .face.type2 .eye {
    animation: eyes-blink 3.2s infinite alternate;
  }
  .face.type3 .eye {
    animation: eyes-blink 4.3s infinite alternate;
  }
  .face.selected.type1 {
    background-color: #ffdd40;
  }
  .face.selected.type2 {
    background-color: #61f118;
  }
  .face.selected.type3 {
    background-color: #f39b5c;
  }
  .face.selected .mouth {
    width: 3.2em;
    height: 1.9em;
  }
  .face:not(.selected) {
    background-color: #ccc;
  }
  .face:not(.selected):not(:hover).type1 .eyes {
    left: 2.6em;
  }
  .face:not(.selected):not(:hover).type1 .mouth {
    left: 4.2em;
    top: 7.3em;
    width: 1.2em;
    height: 0.5em;
  }
  .face:not(.selected):not(:hover).type2 .eyes {
    top: 6.1em;
    left: 4.2em;
  }
  .face:not(.selected):not(:hover).type2 .eyes .eye {
    height: 1.2em;
  }
  .face:not(.selected):not(:hover).type2 .mouth {
    left: 5.6em;
    top: 9.1em;
    width: 1.2em;
    height: 0.5em;
  }
  .face:not(.selected):not(:hover).type3 .eyes {
    top: 2.6em;
    left: 4.6em;
  }
  .face:not(.selected):not(:hover).type3 .mouth {
    left: 6em;
    top: 6.3em;
    width: 1.2em;
    height: 0.5em;
  }
  .face:not(.selected):hover .mouth {
    position: absolute;
    background-color: black;
    top: 7em;
    left: 5.2em;
    width: 1.5em;
    height: 1.3em;
    border-radius: 0 0 3em 3em;
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
