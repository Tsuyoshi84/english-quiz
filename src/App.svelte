<script>
  import Phrase from "./Phrase.svelte";

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
    padding: 1em;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <Phrase {phrase} />

</main>
