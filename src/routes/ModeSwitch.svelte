<script lang="ts">
	import type { Mode } from '../types';

	type Props = {
		/** The mode to display */
		mode: Mode;
	};

	let { mode = $bindable('phrase') }: Props = $props();
</script>

<div class="wrapper">
	<button class="switch-button" onclick={() => (mode = 'phrase')} class:active={mode === 'phrase'}
		>Phrases</button
	>
	<button class="switch-button" onclick={() => (mode = 'word')} class:active={mode === 'word'}
		>Words</button
	>
</div>

<style>
	.wrapper {
		display: flex;
		inline-size: var(--size-15);
		inline-size: 100%;
		block-size: var(--size-8);
		gap: 0;
	}

	.switch-button {
		--radius: var(--radius-2);
		--color: var(--gray-7);
		--bg-color: var(--gray-9);

		border: 1px solid var(--gray-7);
		flex: 1 1 auto;
		font-size: var(--font-size-4);
		color: var(--color);
		background-color: var(--bg-color);
		transition: all 0.1s var(--ease-in-out-2);

		&:first-child {
			border-radius: var(--radius) 0 0 var(--radius);
		}

		&:last-child {
			border-radius: 0 var(--radius) var(--radius) 0;
		}

		&.active {
			--color: var(--white);
			--shadow-color: oklch(from var(--color) 0.8deg c h);

			text-shadow:
				0 0 var(--font-size-1) var(--indigo-2),
				0 0 var(--font-size-2) var(--indigo-4);
			color: var(--color);
			background-color: var(--gray-8);
		}

		&:focus-visible {
			z-index: 1;
		}

		&:hover:not(.active) {
			color: oklch(from var(--color) 0.5deg c h);
			background-color: oklch(from var(--bg-color) 0.3deg c h);
		}
	}
</style>
