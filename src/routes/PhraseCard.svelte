<script lang="ts">
	import Example from './Example.svelte';
	import type { Phrase } from '../types.ts';
	import { read_out_loud, stop_reading } from '../utilities/speech.ts';

	interface Props {
		/** The phrase to display */
		phrase: Phrase;
		/** Function to call when the next button is clicked */
		next: () => void;
	}

	let { phrase, next }: Props = $props();

	function read() {
		stop_reading();
		read_out_loud(phrase.body);
	}
</script>

<article class="card">
	<button class="phrase" onclick={read} aria-label="Read out loud">{phrase.body}</button>
	<p class="meaning">{phrase.meaning}</p>
	<Example examples={phrase.examples} />
	<button class="next-button" onclick={next}>Next</button>
</article>

<style>
	.card {
		display: flex;
		inline-size: 100%;
		min-block-size: var(--size-14);
		margin: 0 auto;
		padding: var(--size-fluid-2);
		border: 1px solid var(--c-border);
		border-radius: var(--radius-3);
		flex-direction: column;
		gap: var(--size-4);
		background-color: var(--c-bg-base-2);
		box-shadow: inset 0 2px 3px rgb(255 255 255 / 6%);
		box-shadow: 0 0 0 1px rgb(255 255 255 / 15%);

		@media (width >= 500px) {
			gap: var(--size-8);
		}
	}

	.phrase {
		border: none;
		font-family: var(--font-nunito);
		font-size: var(--font-size-fluid-2);
		font-weight: var(--font-weight-7);
		color: var(--c-fg-title);
		background-color: transparent;

		/* background: var(--gradient-19); */

		/* background-clip: text;
		-webkit-text-fill-color: transparent; */
		text-wrap: balance;
	}

	.meaning {
		margin: 0;
		font-family: var(--font-nunito);
		font-size: var(--font-size-fluid-1);
		text-align: center;
		color: var(--c-fg-base-2);
		text-wrap: pretty;
	}

	.next-button {
		padding: var(--size-2) var(--size-7);
		border: none;
		border-radius: var(--radius-2);
		font-family: var(--font-nunito);
		font-size: var(--font-size-fluid-1);
		color: var(--c-fg-base-2);
		background-color: var(--c-bg-base-3);
		transition: all 0.2s var(--ease-in-out-3);
	}
</style>
