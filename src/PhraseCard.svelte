<script>
  export let phrase = {
    body: "",
    meaning: "",
    example: ""
  };

  $: queryParam = encodeURIComponent(phrase.example);
</script>

<style>
  section {
    box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 6px 3px;
    border-radius: 10px;
    padding: 1.5em;
    max-width: 420px;
    margin: 0 auto;
  }

  h1 {
    margin-block-start: 1rem;
    font-size: 2.5rem;
    font-weight: bold;
  }

  .meaning {
    font-size: 1.4rem;
    color: #060;
    border-inline-start: 5px solid;
    text-align: left;
    padding: 1rem;
  }

  .example {
    font-size: 1.4rem;
    font-style: italic;
    font-weight: lighter;
    color: #444;
    text-align: left;
  }
</style>

<section>
  <h1>{phrase.body}</h1>
  <p class="meaning">{phrase.meaning}</p>
  <p class="example">
    {phrase.example} (
    <a
      href="https://translate.google.com/?sl=en&tl=ja&text={queryParam}"
      target="_blank"
      rel="noopener">
      Translate
    </a>
    )
  </p>

</section>
