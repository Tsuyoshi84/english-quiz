<script>
  export let selected = true;
  export let type = 'type1';
</script>

<style type="text/scss">
  .face {
    position: relative;
    font-size: 4px;
    width: 12.5em;
    height: 12.5em;
    border-radius: 100%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    -webkit-tap-highlight-color: transparent;

    .eyes {
      position: absolute;
      left: 3.9em;
      top: 3.6em;

      .eye {
        position: absolute;
        background-color: black;
        width: 1.2em;
        height: 1.9em;
        border-radius: 100%;

        &.left {
          left: 0em;
        }

        &.right {
          left: 2.8em;
        }
      }
    }

    .mouth {
      position: absolute;
      background-color: black;
      top: 7em;
      left: 4.4em;
      width: 3.2em;
      height: 0.5em;
      border-radius: 2.2em 2.2em 2em 2em;
    }

    &.selected {
      &.type1 {
        background-color: #ffdd40;
      }

      &.type2 {
        background-color: #61f118;
      }

      &.type3 {
        background-color: #f39b5c;
      }

      .eye {
        animation: eyes-blink 4.2s infinite alternate;
      }
      .mouth {
        width: 3.2em;
        height: 1.9em;
        animation: mounth-shape 2s infinite alternate;
      }
    }

    &:not(.selected) {
      background-color: #ccc;

      &.type1 {
        .eyes {
          left: 2.6em;
        }

        .mouth {
          left: 4.2em;
          top: 7.3em;
          width: 1.2em;
          height: 0.5em;
        }
      }

      &.type2 {
        .eyes {
          top: 6.1em;
          left: 4.2em;

          .eye {
            height: 1.2em;
          }
        }

        .mouth {
          left: 5.6em;
          top: 9.1em;
          width: 1.2em;
          height: 0.5em;
        }
      }

      &.type3 {
        .eyes {
          top: 2.6em;
          left: 4.6em;
        }

        .mouth {
          left: 6em;
          top: 6.3em;
          width: 1.2em;
          height: 0.5em;
        }
      }
    }
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

<div class="face {type}" on:click class:selected>
  <div class="eyes">
    <div class="eye left" />
    <div class="eye right" />
  </div>
  <div class="mouth" />
</div>
