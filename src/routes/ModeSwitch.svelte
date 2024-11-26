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
		border: 1px solid var(--gray-7);
		flex: 1 1 auto;
		font-size: var(--font-size-4);
		color: var(--gray-7);
		background-color: var(--gray-9);
		transition:
			color,
			background-color,
			text-shadow 0.1s var(--ease-in-out-2);
	}

	.switch-button:first-child {
		border-radius: var(--radius-2) 0 0 var(--radius-2);
	}

	.switch-button:last-child {
		border-radius: 0 var(--radius-2) var(--radius-2) 0;
	}

	.active {
		text-shadow:
			0 0 var(--font-size-1) var(--gray-5),
			0 0 var(--font-size-2) var(--gray-7);
		color: var(--gray-2);
		background-color: var(--gray-8);
	}
</style>
