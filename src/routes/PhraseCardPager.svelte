<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import PhraseCard from './PhraseCard.svelte';
	import type { Phrase } from '../types';

	type Props = {
		/** Phrase to show */
		phrase: Phrase;
		/** Whether to show the next card */
		next: boolean;
	};
	let { phrase, next = true }: Props = $props();

	const duration = 500;

	function appear(node: Element) {
		if (next) {
			return fly(node, { y: 600, opacity: 1, duration });
		} else {
			return scale(node, {
				opacity: 0.5,
				start: 0.5,
				easing: quintOut,
				duration
			});
		}
	}

	function disappear(node: Element) {
		if (next) {
			return scale(node, {
				opacity: 0.5,
				start: 0.5,
				easing: quintOut,
				duration
			});
		} else {
			return fly(node, { y: 600, opacity: 1, duration });
		}
	}
</script>

<div class="card-container">
	<div id="card-holder-1" class="card-holder" in:appear out:disappear>
		<PhraseCard {phrase} on:next on:back />
	</div>
</div>

<style>
	.card-container {
		position: relative;
		inline-size: 100%;
		block-size: 100%;
	}

	.card-holder {
		position: absolute;
		top: 50%;
		left: 50%;
		inline-size: 100%;
		margin: auto;
		transform: translate(-50%, -50%);
	}
</style>
