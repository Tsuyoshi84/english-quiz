<script>
  import PhraseCard from "./PhraseCard.svelte";

  let phrase = {
    body: "sink into oblivion",
    meaning:
      "To become lost to obscurity; to not be known or remembered by anyone.",
    example:
      "He held a rather cynical view of parenthood, believing that people only had children to avoid sinking into oblivion."
  };
</script>

<style>
  main {
    text-align: center;
    padding: 1rem;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    align-items: center;
  }
</style>

<main>
  <PhraseCard {phrase} />

</main>
