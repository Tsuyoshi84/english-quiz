<script>
	import '../styles/styles.css';
	import { theme } from '$lib/theme/theme.svelte.ts';

	const { children } = $props();

	$effect(() => {
		document.documentElement.setAttribute('data-theme', theme.value);
	});
</script>

<div class="app">
	{@render children?.()}
</div>
