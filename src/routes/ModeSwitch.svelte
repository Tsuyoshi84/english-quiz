<script lang="ts">
	import type { Mode } from './types';

	export let mode: Mode = 'phrase';
</script>

<div class="wrapper">
	<button class="switch-button" on:click={() => (mode = 'phrase')} class:active={mode === 'phrase'}
		>Phrases</button
	>
	<button class="switch-button" on:click={() => (mode = 'word')} class:active={mode === 'word'}
		>Words</button
	>
</div>

<style lang="postcss">
	.wrapper {
		display: flex;
		gap: 0;
		inline-size: 100%;
		block-size: var(--size-8);
	}

	.switch-button {
		border: none;
		flex: 1 1 auto;
		font-size: var(--font-size-4);
		color: var(--gray-7);
		border: 1px solid var(--gray-7);
		background-color: var(--gray-9);
		transition: color, background-color, text-shadow 0.1s var(--ease-in-out-2);
	}

	.switch-button:first-child {
		border-radius: var(--radius-2) 0 0 var(--radius-2);
	}

	.switch-button:last-child {
		border-radius: 0 var(--radius-2) var(--radius-2) 0;
	}

	.active {
		background-color: var(--gray-8);
		color: var(--gray-2);
		text-shadow: 0 0 var(--font-size-1) var(--gray-5), 0 0 var(--font-size-2) var(--gray-7);
	}
</style>
