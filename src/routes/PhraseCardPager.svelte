<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import PhraseCard from './PhraseCard.svelte';
	import type { Phrase } from '../types';

	/** Phrase to show */
	export let phrase: Phrase;
	/** Whether to show the next card */
	export let next = true;

	const duration = 500;

	let phrase_1_visible = true;

	let phrase1: Phrase = phrase;
	let phrase2: Phrase = phrase;

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

	function set_z_index() {
		if (!next) {
			const id = phrase_1_visible ? '#card-holder-2' : '#card-holder-1';
			const el = document.querySelector<HTMLElement>(id);
			if (el) {
				el.style.zIndex = '12';
			}
		}
	}

	$: {
		if (phrase_1_visible) {
			phrase2 = phrase;
		} else {
			phrase1 = phrase;
		}

		phrase_1_visible = !phrase_1_visible;
		set_z_index();
	}
</script>

<div class="card-container">
	{#if phrase_1_visible}
		<div id="card-holder-1" class="card-holder" in:appear out:disappear>
			<PhraseCard phrase={phrase1} on:next on:back />
		</div>
	{:else}
		<div
			id="card-holder-2"
			class="card-holder"
			class:above={phrase_1_visible && next}
			in:appear
			out:disappear
		>
			<PhraseCard phrase={phrase2} on:next on:back />
		</div>
	{/if}
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

	.above {
		z-index: 1000;
	}
</style>
