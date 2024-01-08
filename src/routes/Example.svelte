<script lang="ts">
	import { onDestroy } from 'svelte';
	import { speak, stop_speaking } from '../utilities/speech';

	/** Example sentences*/
	export let examples: string[] = [];

	/** The index of the selected sentence*/
	let selected_index: number | undefined;

	function speech_example(index: number) {
		stop_speaking();
		selected_index = index;
		speak(examples[index]);
	}

	onDestroy(() => {
		stop_speaking();
	});
</script>

<ul class="example-container">
	{#each examples as example, index}
		<li class:selected={selected_index === index}>
			<button
				type="button"
				class="example"
				on:click={(_) => speech_example(index)}
				aria-label="Read the example"
			>
				{example}
			</button>
		</li>
	{/each}
</ul>

<style>
	@import url('open-props/style');

	.example-container {
		display: flex;
		padding: var(--size-2);
		padding-left: var(--size-4);
		border-radius: var(--size-2);
		flex-direction: column;
		flex-grow: 1;
		gap: var(--size-4);
		background-color: var(--gray-7);
	}

	li {
		text-align: start;
		list-style-type: '';
		marker: 'a';

		&.selected {
			list-style-type: '>';

			&::marker {
				color: var(--green-4);
			}
		}
	}

	.example {
		min-height: var(--size-7);
		border: none;
		font-family: var(--font-overlock);
		font-size: var(--font-size-2);
		font-style: italic;
		text-align: start;
		white-space: pre-wrap;
		color: var(--gray-1);
		background: transparent;
		transition:
			color,
			0.2s var(--ease-2);
		user-select: none;
		text-wrap: pretty;

		&:hover {
			color: var(--gray-4);
			cursor: pointer;
		}
	}

	li.selected .example {
		color: var(--green-4);
	}
</style>
