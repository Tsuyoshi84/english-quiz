<script lang="ts">
	import { onDestroy } from 'svelte';
	import { speak, stop_speaking } from '../utilities/speech';

	type Props = {
		/** Example sentences*/
		examples: string[];
	};

	let { examples = [] }: Props = $props();

	/** The index of the selected sentence*/
	let selected_index = $state<number | undefined>(undefined);

	function speech_example(index: number) {
		stop_speaking();
		selected_index = index;
		speak(examples[index]);
	}

	onDestroy(() => {
		stop_speaking();
	});
</script>

<div class="example-container">
	{#each examples as example, index (index)}
		<button
			class:selected={selected_index === index}
			type="button"
			class="example"
			onclick={() => speech_example(index)}
			aria-label="Read the example"
		>
			{example}
		</button>
	{/each}
</div>

<style>
	@import url('open-props/style');

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
		padding: var(--size-4);
		border: none;
		border: 1px solid var(--c-border);
		border-radius: var(--radius-2);
		font-family: var(--font-overlock);
		font-size: var(--font-size-fluid-1);
		font-style: italic;
		text-align: start;
		white-space: pre-wrap;
		color: var(--c-fg-sub);
		background-color: var(--c-bg-block);
		box-shadow: var(--shadow-1);
		transition:
			all,
			0.2s var(--ease-2);
		user-select: none;
		text-wrap: pretty;

		--c-fg-selected: light-dark(
			oklch(from var(--c-fg-sub) 20% c h),
			oklch(from var(--c-bg-block) 100% c h)
		);

		&:hover {
			color: var(--c-fg-selected);
		}

		&.selected {
			--degree: 45deg;

			border-color: oklch(from var(--c-border) 40% c h);
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
