/**
 * Segment Typewriter specific rules. Because Typewriter generate clients for us with some code that doesn't pass our
 * linting rules, we provide some overrides so we don't have to think about it going forward.
 *
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  overrides: [
    {
      files: ['**/typewriter/*.ts'],
      rules: {
        'no-console': 'off',
        'no-prototype-builtins': 'off',
        'no-use-before-define': 'off',
      },
    },
  ],
}
