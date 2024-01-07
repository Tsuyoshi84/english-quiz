<script lang="ts">
	import { onDestroy } from 'svelte';
	import FaceButton from './FaceButton.svelte';
	import { set_new_line } from '../utilities/phrase-helper';
	import { speak } from '../utilities/speech';

	/** Example sentences*/
	export let examples: string[] = [];

	/** The index of the selected sentence*/
	let selected_index = 0;
	/** Example text to show*/
	let example_text = '';
	/** SpeechSynthesis object*/
	let synthesis: SpeechSynthesis | undefined = undefined;

	onDestroy(() => {
		cancel_speech_example();
	});

	function select_example(index: number) {
		selected_index = index;
		set_example();
		cancel_speech_example();
	}

	function set_example() {
		example_text = set_new_line(examples[selected_index]);
	}

	function speech_example() {
		synthesis = speak(examples[selected_index]);
	}

	function cancel_speech_example() {
		if (synthesis) {
			synthesis.cancel();
			synthesis = undefined;
		}
	}

	$: {
		selected_index = 0;
		set_example();
	}
</script>

<div class="example-container">
	<button type="button" class="example" on:click={speech_example}>
		{example_text}
	</button>
	<div class="button-container">
		{#each examples as _e, i}
			<FaceButton
				selected={selected_index === i}
				type={`type${i + 1}`}
				on:click={() => select_example(i)}
			/>
		{/each}
	</div>
</div>

<style>
	@import url('open-props/style');

	.example-container {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: flex-end;
	}

	.example {
		position: relative;
		display: flex;
		min-height: var(--size-7);
		margin-block: var(--size-2) var(--size-3);
		padding: var(--size-2) var(--size-3);
		border: 1px solid var(--gray-6);
		border-radius: var(--radius-3);
		align-items: center;
		justify-content: center;
		font-family: var(--font-overlock);
		font-size: var(--font-size-3);
		white-space: pre-wrap;
		color: var(--gray-1);
		background: var(--gray-7);
		transition:
			color,
			0.2s var(--ease-2);
		user-select: none;
	}

	.example:hover {
		color: var(--gray-4);
		cursor: pointer;
	}

	.button-container {
		display: flex;
		justify-content: center;
	}
</style>
