# @chordcommerce/prettier

Chord Commerce's shared [Prettier](https://prettier.io/) configuration.

## Installation

First, you must configure your package manager to use Chord's Github Packages repository. You will need a `~/.npmrc`
with the following line:

```
@chordcommerce:registry=https://npm.pkg.github.com
```

Then, you can install the package like normal.

```bash
$ npm install -D @chordcommerce/prettier
$ yarn add -D @chordcommerce/prettier
```

This package also requires Prettier to be installed as a peer dependency. You can find installation instructions at
[prettier.io](https://prettier.io).

## Usage

In your `package.json`, you can add the following line:

```json
{
  "prettier": "@chordcommerce/prettier"
}
```

There are countless ways to define this configuration [according to Prettier's documentation](https://prettier.io/docs/en/configuration.html),
this is just the first one listed. Feel free to use whichever floats your boat ⛵️.
