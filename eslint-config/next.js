/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['@chordcommerce', '@chordcommerce/react', 'next'],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    React: 'writable',
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: 'babel-eslint',
    allowImportExportEverywhere: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
}
