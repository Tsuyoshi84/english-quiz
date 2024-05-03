<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Example from './Example.svelte';
	import type { Phrase } from '../types';
	import { speak, stop_speaking } from '../utilities/speech';

	export let phrase: Phrase;

	const dispatch = createEventDispatcher();

	function speech_body() {
		stop_speaking();
		speak(phrase.body);
	}

	function next(): void {
		dispatch('next');
	}

	function back(): void {
		dispatch('back');
	}
</script>

<section class="card-section">
	<button class="phrase" on:click={speech_body}>{phrase.body}</button>
	<p class="meaning">{phrase.meaning}</p>
	<Example examples={phrase.examples} />
	<div class="next-button-wrapper">
		<button class="next-button" on:click={back}>Back</button>
		<button class="next-button" on:click={next}>Next</button>
	</div>
</section>

<style>
	.card-section {
		display: flex;
		max-inline-size: 420px;
		min-block-size: 500px;
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

	.next-button-wrapper {
		display: flex;
		margin-block-start: var(--size-3);
		grid-gap: var(--size-3);
		align-items: flex-end;
		justify-content: center;
	}

	.next-button-wrapper .next-button {
		padding: var(--size-2) var(--size-7);
		border: none;
		border-radius: var(--radius-4);
		font-family: var(--font-nunito);
		font-size: var(--font-size-5);
		color: var(--white-5);
		background-color: var(--indigo-8);
		transition: all 0.2s var(--ease-in-out-3);
	}

	.next-button-wrapper .next-button:disabled {
		filter: saturate(0%);
		cursor: initial;
	}

	.next-button-wrapper .next-button:not(:disabled):hover {
		padding: var(--size-2) var(--size-7);
		cursor: pointer;
	}

	.next-button-wrapper .next-button:not(:disabled):active {
		background: none;
	}

	.next-button-wrapper .next-button:not(:disabled):focus {
		outline: 0;
	}
</style>
