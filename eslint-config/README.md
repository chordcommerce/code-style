# @chordcommerce/eslint-config

Chord's shared configurations for [ESLint](https://eslint.org/).

## Installation

First, you must configure your package manager to use Chord's Github Packages repository. You will need a `~/.npmrc`
with the following line:

```
@chordcommerce:registry=https://npm.pkg.github.com
```

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

**This will install all the listed `peerDependencies`, you should audit your `package.json`, remove unneeded features,
and then `npm install` / `yarn install` to clean them up.**

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
  "extends": ["@chordcommerce/eslint-config/react"]
}
```

### TypeScript

Extends: ([@chordcommerce](https://github.com/chordcommerce/code-style/blob/main/eslint-config/index.js), [@typescript-eslint/recommended](https://github.com/typescript-eslint/typescript-eslint))

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
  "extends": ["@chordcommerce/eslint-config/typescript"]
}
```

### Gatsby

Extends: ([@chordcommerce/eslint-config/react](https://github.com/chordcommerce/code-style/blob/main/eslint-config/react.js))

#### Usage

```json
{
  "extends": ["@chordcommerce/eslint-config/gatsby"]
}
```

### Next

Extends: ([@chordcommerce](https://github.com/chordcommerce/code-style/blob/main/eslint-config/index.js), [next](https://nextjs.org/docs/basic-features/eslint))

#### Installation

In order to use this in a Next.js project, you must have `next` installed, which will also install [eslint-config-next](https://www.npmjs.com/package/eslint-config-next).
This must be present for this ruleset to work.

#### Usage

```json
{
  "extends": ["@chordcommerce/eslint-config/next"]
}
```

### Segment Typewriter

Extends: None

[Segment's Typewriter](https://segment.com/docs/protocols/apis-and-extensions/typewriter/) auto generates code that
doesn't pass our linting out of the box. Since the warnings are mostly begin, we provide `overrides` that allow it to
pass out of the box.

#### Installation

```json
{
  "extends": ["@chordcommerce/eslint-config/typewriter"]
}
```

## Extending & Tweaking

ESLint allows for overriding and adding of rules in the project's ESLint config. **The rules added in the project's
config file will always win in configuration resolution.** If you find a rule in our configurations that you don't like
and won't work for your project, feel free to override it there.

If you feel strongly enough about this rule, we welcome pull requests to this repo and would consider adopting it
company wide.
