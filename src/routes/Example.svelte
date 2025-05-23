<script lang="ts">
	import { onDestroy } from 'svelte';
	import { read_out_loud, stop_reading } from '../utilities/speech.ts';

	interface Props {
		/** Example sentences */
		examples: string[];
	}

	let { examples = [] }: Props = $props();

	/** The index of the selected example sentence */
	let selected_index = $state<number | undefined>(undefined);

	$effect(() => {
		examples;
		selected_index = undefined;
	});

	function read(index: number) {
		stop_reading();
		selected_index = index;
		const text = examples[index];
		if (text) {
			read_out_loud(text);
		}
	}

	onDestroy(() => {
		stop_reading();
	});
</script>

<div class="example-container">
	{#each examples as example, index (index)}
		<button
			class:selected={selected_index === index}
			type="button"
			class="example"
			onclick={() => read(index)}
			aria-label="Read the example"
		>
			{example}
		</button>
	{/each}
</div>

<style>
	.example-container {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: center;
		gap: var(--size-2);

		@media (width >= 500px) {
			gap: var(--size-4);
		}
	}

	.example {
		min-height: var(--size-7);
		padding-inline: var(--size-4);
		padding-block: var(--size-2);
		border: none;
		border: 1px solid var(--c-border);
		border-radius: var(--radius-2);
		font-family: var(--font-overlock);
		font-size: var(--font-size-fluid-1);
		font-style: italic;
		text-align: start;
		white-space: pre-wrap;
		color: var(--c-fg-base-2);
		background-color: var(--c-bg-base-3);
		box-shadow: var(--shadow-1);
		transition:
			all,
			0.2s var(--ease-2);
		user-select: none;
		text-wrap: pretty;

		--c-fg-selected: light-dark(
			oklch(from var(--c-fg-base-2) 20% c h),
			oklch(from var(--c-bg-base-3) 100% c h)
		);

		&:hover {
			color: var(--c-fg-selected);
		}

		&.selected {
			--degree: 45deg;

			border-color: light-dark(
				oklch(from var(--c-border) 20% c h),
				oklch(from var(--c-border) 70% c h)
			);
			color: var(--c-fg-selected);
			box-shadow: var(--shadow-3);
		}
	}

	@keyframes gradient {
		0% {
			--degree: 45deg;

			background-position: 0% 50%;
		}

		50% {
			--degree: 135deg;

			background-position: 100% 50%;
		}

		100% {
			--degree: 45deg;

			background-position: 0% 50%;
		}
	}
</style>
