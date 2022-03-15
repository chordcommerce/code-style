# @chordcommerce/code-style

This repo contains rules for various code formatters used at Chord. We strive to have our code style consistent across
codebases and teams to lower cognitive burden.

## Tools

### [ESLint](https://eslint.org/)

ESLint is a Javascript linter that catches various code style violations, bad practices, and in some cases, bugs in
Javascript code before it reaches the end user.

Detailed installation instructions can be found [here](https://github.com/chordcommerce/code-style/tree/main/eslint-config).

### [Prettier](https://prettier.io/)

Prettier is a code formatter that ensures that an opinionated code style is enforced in the codebase. There should be no
[bikeshedding](https://en.wiktionary.org/wiki/bikeshedding) of code style when Prettier is being enforced.

Detailed installation instructions can be found [here](https://github.com/chordcommerce/code-style/tree/main/prettier).

### [Editorconfig](https://editorconfig.org/)

Editorconfig is a config file that defines tab style, tab size and other editor configurations for defined filetypes.
Users must install a [plugin for their editor to use this configuration](https://editorconfig.org/#download) and the
file must be in the root of the repository.

You can copy the [`.editorconfig`](https://github.com/chordcommerce/code-style/blob/main/.editorconfig) from the root of
this repo into your project to get started.
