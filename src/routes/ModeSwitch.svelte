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
		inline-size: 100%;
		block-size: var(--size-8);
		gap: 0;
	}

	.switch-button {
		--radius: var(--radius-2);

		border: 1px solid var(--c-border);
		flex: 1 1 auto;
		font-size: var(--font-size-4);
		color: var(--c-fg-subtle);
		background-color: var(--c-bg-float);
		transition: all 0.1s var(--ease-in-out-2);

		&:first-child {
			border-radius: var(--radius) 0 0 var(--radius);
		}

		&:last-child {
			border-radius: 0 var(--radius) var(--radius) 0;
		}

		&.active {
			--color: var(--fg-title);
			--shadow-color: oklch(from var(--fg-title) 0.8deg c h);

			color: var(--c-fg);
			background-color: var(--c-bg-block);
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
