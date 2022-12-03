<script lang="ts">
	import 'open-props/colors';
	import 'open-props/colors-hsl';
	import 'open-props/fonts';
	import 'open-props/sizes';
	import 'open-props/borders';
	import 'open-props/easings';

	import PhraseCardPager from './PhraseCardPager.svelte';
	import { fetchPhrases, type Phrase } from './phrase-helper.js';
	import ModeSwitch from './ModeSwitch.svelte';
	import type { Mode } from './types';

	let index = 0;
	let next = true;
	let mode: Mode = 'phrase';
	let phrases: Phrase[] = [];

	$: phrase = phrases[index];

	$: {
		phrases = fetchPhrases(mode);
	}

	const setNextPhrase = () => {
		index = index < phrases.length - 1 ? index + 1 : 0;
		next = true;
	};

	const setPreviousPhrase = () => {
		index = index > 0 ? index - 1 : phrases.length - 1;
		next = false;
	};
</script>

<main>
	<ModeSwitch bind:mode />
	<PhraseCardPager
		{...phrase}
		{next}
		on:next={setNextPhrase}
		on:back={setPreviousPhrase}
	/>
</main>

<style lang="postcss">
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		margin: 0 auto;
		background-color: var(--gray-9);
		block-size: 100vh;
		text-align: center;
	}
</style>
