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
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.*',
          '**/test-utils/**/*',
          '**/test-utils/*',
          '**/setup-test*',
          '**/*.spec.*',
          '**/jest*',
        ],
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    'prefer-template': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'object-shorthand': 'off',
    'no-plusplus': 'off',
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  env: {
    es6: true,
    jest: true,
  },
  overrides: [
    {
      files: ['*.json'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
    {
      files: ['*.test.*'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['jest-preprocess.*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
}
