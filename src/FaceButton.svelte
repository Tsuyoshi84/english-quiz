<script lang="ts">
  export let selected: boolean = true;
  export let type: string = 'type1';
</script>

<style type="text/scss">
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
      border-radius: 0 0 2em 2em;
    }

    &.type1 .eye {
      animation: eyes-blink 4s infinite alternate;
    }

    &.type2 .eye {
      animation: eyes-blink 3.2s infinite alternate;
    }

    &.type3 .eye {
      animation: eyes-blink 4.3s infinite alternate;
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

      .mouth {
        width: 3.2em;
        height: 1.9em;
        // animation: mounth-shape 2s infinite alternate;
      }
    }

    &:not(.selected) {
      background-color: #ccc;

      &:not(:hover) {
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

      &:hover {
        .mouth {
          position: absolute;
          background-color: black;
          top: 7em;
          left: 5.2em;
          width: 1.5em;
          height: 1.3em;
          border-radius: 0 0 3em 3em;
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
