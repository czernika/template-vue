/* eslint-env node */

module.exports = {
    root: true,
    env: {
        browser: true,
    },
    plugins: [
        '@typescript-eslint',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
    },
    rules: {
        'no-console': 'warn',
        'no-alert': 'error',
        'semi': ['warn', 'never'],
        'quotes': ['warn', 'single', { 'avoidEscape': true }],
        'comma-dangle': ['warn', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
        }],
    },
}
