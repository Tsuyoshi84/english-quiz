<script lang="ts">
  import PhraseCardPager from './PhraseCardPager.svelte';
  import { fetchPhrases } from './phrase-helper.js';

  let index = 0;
  let phrases = fetchPhrases();
  let phrase = phrases[index];
  let next = true;
  let canBack = false;

  const setNextPhrase = () => {
    index += 1;
    phrase = phrases[index];
    next = true;
    canBack = index > 0;
  };

  const setPreviousPhrase = () => {
    if (index <= 0) {
      return;
    }

    index -= 1;
    phrase = phrases[index];
    next = false;
    canBack = index > 0;
  };
</script>

<main>
  <PhraseCardPager {...phrase} {next} {canBack} on:next={setNextPhrase} on:back={setPreviousPhrase} />
</main>

<style type="text/scss">
  @import '_variables.scss';

  main {
    --background-color: #{$background-color};
    text-align: center;
    padding: 2rem;
    margin: 0 auto;
    block-size: calc(100vh - 60px);
    display: flex;
    align-items: center;
    background-color: var(--background-color);
  }

  @media (prefers-color-scheme: dark) {
    main {
      --background-color: #{$background-color-dark};
    }
  }
</style>
