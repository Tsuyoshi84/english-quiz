<script lang="ts">
	import { Speech } from '@lucide/svelte';
	import { read_out_loud, stop_reading } from '../../utilities/speech.ts';

	interface Props {
		text: string;
		class: string;
	}

	let props: Props = $props();

	let is_reading = $state(false);

	function read(): void {
		stop_reading();

		is_reading = true;
		read_out_loud(props.text, {
			onend: () => {
				is_reading = false;
			}
		});
	}

	function handle_click(): void {
		if (is_reading) {
			stop_reading();
			is_reading = false;
		} else {
			read();
		}
	}
</script>

<button
	onclick={handle_click}
	class={[props.class, is_reading ? 'is-reading' : '']}
	type="button"
	aria-label="Read out loud"
	title="Read out loud"
>
	<Speech size={24} class="icon" />
</button>

<style>
	@property --angle {
		inherits: false;
		initial-value: 0deg;
		syntax: '<angle>';
	}

	@property --gradient-color {
		inherits: false;
		initial-value: oklch(100% 0 0deg);
		syntax: '<color>';
	}

	@keyframes gradient {
		to {
			--angle: 360deg;
		}
	}

	button {
		display: grid;
		inline-size: 1em;
		aspect-ratio: 1;
		border: 2px solid transparent;
		border-color: var(--c-fg-button);
		border-radius: 100%;
		align-items: center;
		justify-content: center;
		color: inherit;
		background:
			linear-gradient(var(--gradient-color)) padding-box,
			linear-gradient(
					var(--angle),
					light-dark(oklch(70% 0.5 0deg), oklch(10% 0.5 0deg)) 20%,
					light-dark(oklch(60% 0.3 80deg), oklch(10% 0.5 120deg)) 50%,
					light-dark(oklch(30% 0.2 220deg), oklch(10% 0.5 120deg)) 100%
				)
				border-box;
		transition:
			border-color 0.2s ease-in-out,
			background-color 0.2s ease-in-out,
			--gradient-color 0.2s ease-in-out,
			--angle 0.2s ease-in-out;

		:global(.icon) {
			color: var(--c-fg-button);
			transition: color 0.2s ease-in-out;
		}

		&:hover {
			border-color: transparent;

			:global(.icon) {
				color: light-dark(oklch(50% 0 0deg), oklch(50% 0 0deg));
			}
		}

		&.is-reading {
			border-color: transparent;
			animation: gradient 2s linear infinite;

			--gradient-color: transparent;

			:global(.icon) {
				color: oklch(100% 0 0deg);
			}
		}
	}
</style>
