import js from '@eslint/js';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const projectParserOptions = {
        project: './tsconfig.json',
        tsconfigRootDir: new URL('.', import.meta.url),
        extraFileExtensions: ['.svelte']
};

export default tseslint.config(
        { ignores: ['.svelte-kit/**/*', 'build/**/*', 'dist/**/*', 'node_modules/**/*'] },
        js.configs.recommended,
        ...tseslint.configs.recommendedTypeChecked,
        ...tseslint.configs.stylisticTypeChecked,
        ...eslintPluginSvelte.configs['flat/recommended'],
        {
                files: ['**/*.{js,ts,svelte}'],
                languageOptions: {
                        parserOptions: projectParserOptions,
                        globals: {
                                ...globals.browser,
                                ...globals.node
                        }
                }
        },
        {
                files: ['**/*.svelte'],
                languageOptions: {
                        parserOptions: projectParserOptions
                },
                processor: eslintPluginSvelte.processors.svelte,
                settings: {
                        'svelte/typescript': true,
                        'svelte/config': 'svelte.config.js'
                }
        },
        eslintConfigPrettier
);
