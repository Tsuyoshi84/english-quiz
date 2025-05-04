<script lang="ts">
	import { theme, toggleTheme } from '$lib/theme/theme.svelte';
	import Sun from '@lucide/svelte/icons/sun';
	import Moon from '@lucide/svelte/icons/moon';
</script>

<button class="switch-theme" onclick={toggleTheme} title="Toggle theme" aria-label="Toggle theme">
	{#if theme.value === 'light'}
		<Sun fill="currentColor" />
	{:else}
		<Moon fill="currentColor" />
	{/if}
</button>

<style>
	.switch-theme {
		inline-size: var(--size-10);
		block-size: var(--size-10);
		border: none;
		color: light-dark(oklch(80% 0.1 60deg), oklch(80% 0.1 220deg));
		background-color: transparent;
	}
</style>
