/**
 * React specific eslint config.
 *
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['@chordcommerce', 'airbnb', 'airbnb/hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-closing-bracket-location': 1,
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    semi: 'off',
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
}
