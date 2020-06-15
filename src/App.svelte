<script>
  import PhraseCardPager from "./PhraseCardPager.svelte";
  import { fetchRandomPhrase } from "./phrases.js";

  let phrase = fetchRandomPhrase();

  const updatePhrase = () => {
    phrase = fetchRandomPhrase();
  };
</script>

<style>
  main {
    text-align: center;
    padding: 2rem;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    align-items: center;
  }
</style>

<main>
  <PhraseCardPager {...phrase} on:next={updatePhrase} />

</main>
