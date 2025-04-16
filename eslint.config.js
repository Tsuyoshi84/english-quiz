import { includeIgnoreFile } from '@eslint/compat';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import globals from 'globals';
import ts from 'typescript-eslint';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import svelteConfig from './svelte.config.js';

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
const gitignore_path = path.resolve(_dirname, '.gitignore');

export default [
	includeIgnoreFile(gitignore_path),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	{
		ignores: ['**/*.d.ts']
	},

	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		// See more details at: https://typescript-eslint.io/packages/parser/
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'], // Add support for additional file extensions, such as .svelte
				parser: ts.parser,
				// Specify a parser for each language, if needed:
				// parser: {
				//   ts: ts.parser,
				//   js: espree,    // Use espree for .js files (add: import espree from 'espree')
				//   typescript: ts.parser
				// },

				// We recommend importing and specifying svelte.config.js.
				// By doing so, some rules in eslint-plugin-svelte will automatically read the configuration and adjust their behavior accordingly.
				// While certain Svelte settings may be statically loaded from svelte.config.js even if you don’t specify it,
				// explicitly specifying it ensures better compatibility and functionality.
				svelteConfig
			}
		}
	},
	{
		rules: {
			// Override or add rule settings here, such as:
			// 'svelte/rule-name': 'error'
		}
	}
];
