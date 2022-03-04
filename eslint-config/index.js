/**
 * Base eslint config for Chord Commerce. It defines the bare minimum of eslint
 * rules that all projects will use.
 *
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'import/no-unresolved': 'off',
    'import/named': 1,
    'no-console': 'warn',
    'no-debugger': 'warn',
  },
  env: {
    es6: true,
    jest: true,
  },
}
