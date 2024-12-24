import globals from 'globals'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}', '*.js'] },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single', { 'avoidEscape': true }],
      '@stylistic/keyword-spacing': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@/object-curly-spacing': ['error', 'always'],
      '@stylistic/key-spacing': ['error', { 'beforeColon': false }],
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/no-multi-spaces': 'error'
    }
  }
]