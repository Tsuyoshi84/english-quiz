<script lang="ts">
	import PhraseCard from './PhraseCard.svelte';
	import type { Phrase } from '../types.ts';
	import { animate } from 'motion';

	interface Props {
		/** Phrase to show */
		phrase: Phrase;
		/** Function to call when the next card is clicked */
		next: () => void;
	}
	let { phrase, next }: Props = $props();

	let phrase_card: HTMLElement;

	async function show_next_card() {
		await animate(phrase_card, { opacity: 0, y: [0, -50] }, { duration: 0.2 });
		next();
		await animate(phrase_card, { opacity: 1, y: [50, 0] }, { duration: 0.2 });
	}
</script>

<div class="card-container">
	<div class="card-holder" bind:this={phrase_card}>
		<PhraseCard {phrase} next={show_next_card} />
	</div>
</div>

<style>
	.card-container {
		position: relative;
		display: flex;
		inline-size: 100%;
		block-size: 100%;
		align-items: center;

		.card-holder {
			inline-size: 100%;
		}
	}
</style>
