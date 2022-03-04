/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['airbnb', 'prettier', 'airbnb/hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-closing-bracket-location': 1,
    'react/prop-types': 'off',
    'import/no-unresolved': 'off',
    'import/named': 1,
    'react/display-name': 'off',
    'no-console': 'warn',
    'no-debugger': 'warn',
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
}
