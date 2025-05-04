type ThemeValue = 'light' | 'dark';

export const theme = $state<{ value: ThemeValue }>({ value: 'light' });

export function toggleTheme() {
	theme.value = theme.value === 'light' ? 'dark' : 'light';
}
