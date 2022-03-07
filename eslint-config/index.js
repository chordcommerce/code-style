/**
 * Base eslint config for Chord Commerce. It defines the bare minimum of eslint
 * rules that all projects will use.
 *
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'arrow-body-style': 'off',
    'import/named': 1,
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'prefer-template': 'off',
  },
  env: {
    es6: true,
    jest: true,
  },
}
