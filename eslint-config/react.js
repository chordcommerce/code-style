/**
 * React specific eslint config.
 *
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['airbnb', 'airbnb/hooks', '@chordcommerce'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'react/jsx-closing-bracket-location': 1,
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: ['arrow-function'],
      },
    ],
    semi: 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
}
