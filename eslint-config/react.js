/**
 * React specific eslint config.
 *
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['@chordcommerce/eslint-config', 'airbnb/hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-closing-bracket-location': 1,
    'react/prop-types': 'off',
    'react/display-name': 'off',
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
}
