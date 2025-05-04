<script lang="ts">
	import PhraseCardPager from './PhraseCardPager.svelte';
	import { fetch_phrases } from '../utilities/phrase-helper';
	import ModeSwitch from './ModeSwitch.svelte';
	import type { Mode } from '../types';
	import { populate_voices } from '../utilities/speech';
	import { onMount } from 'svelte';

	let index = $state(0);
	let next = $state(true);
	let mode: Mode = $state('phrase');
	let phrases = $derived(fetch_phrases(mode));
	let phrase = $derived(phrases[index]);

	const setNextPhrase = () => {
		index = index < phrases.length - 1 ? index + 1 : 0;
		next = true;
	};

	onMount(() => {
		populate_voices();
	});
</script>

<svelte:head>
	<title>English Cards</title>
	<meta name="description" content="Learn and memorize English words and phrases!" />
</svelte:head>

<main>
	<ModeSwitch bind:mode />
	<PhraseCardPager {phrase} {next} on:next={setNextPhrase} />
</main>

<style>
	main {
		display: flex;
		inline-size: calc(100vw - 0.5rem);
		max-inline-size: 40rem;
		block-size: 100dvh;
		margin: 0 auto;
		padding: 2rem;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
</style>
