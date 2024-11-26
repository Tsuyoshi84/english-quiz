<script lang="ts">
	import 'open-props/colors';
	import 'open-props/colors-hsl';
	import 'open-props/fonts';
	import 'open-props/sizes';
	import 'open-props/borders';
	import 'open-props/easings';

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

	const setPreviousPhrase = () => {
		index = index > 0 ? index - 1 : phrases.length - 1;
		next = false;
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
	<PhraseCardPager {phrase} {next} on:next={setNextPhrase} on:back={setPreviousPhrase} />
</main>

<style>
	main {
		display: flex;
		block-size: 100vh;
		margin: 0 auto;
		padding: 2rem;
		flex-direction: column;
		align-items: center;
		text-align: center;
		background-color: var(--gray-9);
	}
</style>
