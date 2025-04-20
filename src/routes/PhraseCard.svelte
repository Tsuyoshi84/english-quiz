<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Example from './Example.svelte';
	import type { Phrase } from '../types';
	import { speak, stop_speaking } from '../utilities/speech';

	type Props = {
		/** The phrase to display */
		phrase: Phrase;
	};

	let { phrase }: Props = $props();

	const dispatch = createEventDispatcher();

	function speech_body() {
		stop_speaking();
		speak(phrase.body);
	}

	function next(): void {
		dispatch('next');
	}
</script>

<article class="card">
	<button class="phrase" onclick={speech_body} aria-label="Read out loud">{phrase.body}</button>
	<p class="meaning">{phrase.meaning}</p>
	<Example examples={phrase.examples} />
	<button class="next-button" onclick={next}>Next</button>
</article>

<style>
	.card {
		display: flex;
		inline-size: var(--size-15);
		max-inline-size: 100%;
		min-block-size: var(--size-14);
		margin: 0 auto;
		padding: var(--size-3);
		border-radius: var(--radius-3);
		flex-direction: column;
		background-color: var(--gray-8);
		box-shadow: inset 0 2px 3px rgb(255 255 255 / 6%);
		box-shadow: 0 0 0 1px rgb(255 255 255 / 15%);
	}

	.phrase {
		margin-block: var(--size-3) var(--size-3);
		border: none;
		font-family: var(--font-nunito);
		font-size: var(--font-size-5);
		font-weight: var(--font-weight-7);
		color: var(--gray-0);
		background: var(--gradient-19);
		background-clip: text;
		-webkit-text-fill-color: transparent;
		text-wrap: balance;
	}

	.meaning {
		margin-block: var(--size-3) var(--size-3);
		font-family: var(--font-nunito);
		font-size: var(--font-size-3);
		text-align: center;
		color: var(--gray-4);
		text-wrap: pretty;
	}

	.next-button {
		padding: var(--size-2) var(--size-7);
		border: none;
		border-radius: var(--radius-2);
		font-family: var(--font-nunito);
		font-size: var(--font-size-5);
		color: var(--white-5);
		background: var(--gradient-17);
		transition: all 0.2s var(--ease-in-out-3);
		margin-block-start: var(--size-8);
	}
</style>
