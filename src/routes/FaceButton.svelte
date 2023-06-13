<script lang="ts">
	/** Whether the face is selected*/
	export let selected = true;
	/** Type of face*/
	export let type: `type${number}` = 'type1';
</script>

<button class="face {type}" on:click class:selected>
	<div class="eyes">
		<div class="eye left" />
		<div class="eye right" />
	</div>
	<div class="mouth" />
</button>

<style lang="postcss">
	* {
		transition: all 0.2s ease-in-out;
	}

	.face {
		all: unset;
		position: relative;
		width: 12.5em;
		height: 12.5em;
		margin: 0 1em;
		border-radius: 100%;
		cursor: pointer;
		font-size: 4px;
		-webkit-tap-highlight-color: transparent;
		transition: all 0.2s ease-in-out;

		& .eyes {
			position: absolute;
			top: 3.6em;
			left: 3.9em;

			& .eye {
				position: absolute;
				width: 1.2em;
				height: 1.9em;
				background-color: black;
				border-radius: 100%;
			}

			& .eye.left {
				left: 0;
			}

			& .eye.right {
				left: 2.8em;
			}
		}

		& .mouth {
			position: absolute;
			top: 7em;
			left: 4.4em;
			width: 3.2em;
			height: 0.5em;
			background-color: black;
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

	.face:not(.selected):hover .mouth {
		position: absolute;
		top: 7em;
		left: 5.2em;
		width: 1.5em;
		height: 1.3em;
		background-color: black;
		border-radius: 0 0 3em 3em;
	}

	.face:not(.selected):not(:hover).type1 .eyes {
		left: 2.6em;
	}

	.face:not(.selected):not(:hover).type1 .mouth {
		top: 7.3em;
		left: 4.2em;
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
		top: 9.1em;
		left: 5.6em;
		width: 1.2em;
		height: 0.5em;
	}

	.face:not(.selected):not(:hover).type3 .eyes {
		top: 2.6em;
		left: 4.6em;
	}

	.face:not(.selected):not(:hover).type3 .mouth {
		top: 6.3em;
		left: 6em;
		width: 1.2em;
		height: 0.5em;
	}

	@keyframes eyes-blink {
		0% {
			top: 0;
			height: 1.9em;
		}

		98% {
			top: 0;
			height: 1.9em;
		}

		100% {
			top: 1em;
			height: 0.1em;
		}
	}
	@keyframes mounth-shape {
		0% {
			width: 3.2em;
			height: 2em;
			border-radius: 0.2em 0.2em 2em 2em;
		}

		90% {
			width: 3.2em;
			height: 2em;
			border-radius: 0.2em 0.2em 2em 2em;
		}

		100% {
			width: 2.8em;
			height: 1em;
			border-radius: 1em 1em 2em 2em;
		}
	}
</style>
