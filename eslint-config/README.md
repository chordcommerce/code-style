# @chordcommerce/eslint-config

## Installation

Following patterns in other eslint configs and given the disprate nature of codebases, all of the dependencies of this
package are listed as peer dependencies. This allows for upgrading of individual dependencies without running into
issues in caused by this package.

In order to smoothly install this package, we recommend using [install-peerdeps](https://www.npmjs.com/package/install-peerdeps)
when initially installing this package.

```bash
# npm
$ npx install-peerdeps --dev @chordcommerce/eslint-config

# yarn
$ npx install-peerdeps --yarn --dev @chordcommerce/eslint-config

# yarn, in the root of a workspace
$ npx install-peerdeps --yarn -x "-W" --dev @chordcommerce/eslint-config
```

## Configuration Options

This package exposes a variety of eslint configuration options that can be used for your specific use case.

### Base

Extends: ([airbnb](https://www.npmjs.com/package/eslint-config-airbnb), [prettier](https://github.com/prettier/eslint-config-prettier))

#### Usage

```json
{
  "extends": ["@chordcommerce"]
}
```

### React

Extends: ([@chordcommerce](https://github.com/chordcommerce/code-style/blob/main/eslint-config/index.js), [airbnb/hooks](https://www.npmjs.com/package/eslint-config-airbnb#eslint-config-airbnbhooks))

#### Usage

```json
{
  "extends": ["@chordcommerce/react"]
}
```

### TypeScript

Extends: ([@chordcommerce](https://github.com/chordcommerce/code-style/blob/main/eslint-config/index.js), [airbnb/hooks](https://www.npmjs.com/package/eslint-config-airbnb#eslint-config-airbnbhooks))

#### Installation

In order to use this config, you must install [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).
Detailed installtion directions can be found there, but the gist of it is:

```bash
# npm
$ npm i --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin

# yarn
$ yarn add -D typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

#### Usage

```json
{
  "extends": ["@chordcommerce/typescript"]
}
```
