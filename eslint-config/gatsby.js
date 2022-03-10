/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['@chordcommerce/eslint-config/react'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  overrides: [
    // gatsby-*.js historically has not supported all the ES6 niceties that the browser supports. Futhermore, it's
    // node.js code, so we want things like console.log to not throw warnings (though you should probably be using the
    // reporter, but that's neither here nor there).
    {
      files: [
        'gatsby-node.*',
        'gatsby-config.*',
        'gatsby-ssr.*',
        'gatsby-browser.*',
      ],
      rules: {
        'no-console': 'off',
      },
      env: {
        node: true,
      },
    },
  ],
}
