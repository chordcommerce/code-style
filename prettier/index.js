/**
 * @type {import('prettier').Config}
 */
module.exports = {
  // Prettier 2 default. Can lead to smaller diffs.
  arrowParens: 'always',
  // Javascript only needs semicolons in unique cirumstances.
  semi: false,
  // Easier to type
  singleQuote: true,
  // Most popular libraries use 2 space tab stops.
  tabWidth: 2,
  // Smaller diffs when adding to objects and arrays. No trailing commas in
  // function parameters.
  trailingComma: 'es5',
}
