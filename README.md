# sort-configs

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

[![Github NodeJS][github-nodejs]][github-action-url]
[![Codecov][codecov-image]][codecov-url]
[![Codacy Grade Badge][codacy-grade]][codacy-grade-url]
[![Codacy Coverage Badge][codacy-coverage]][codacy-coverage-url]

[![Visual Studio Code][vscode-image]][vscode-url]

[`sort-configs`](https://github.com/unional/sort-configs) helps you to sort all kinds of configuration files.

## Install

```sh
npm install --global sort-configs
yarn add --global sort-configs
```

## Usage

By default, `sort-configs` will sort config files under the current directory.

```sh
$ sort-configs
.eslintrc is sorted!
package.json is sorted!
tsconfig.json is sorted!
```

You can also specify specific files using globs:
`sort-configs [...globs]`

```sh
$ sort-configs "packages/*/package.json"
packages/package-a/package.json is sorted!
packages/package-b/package.json is sorted!

$ sort-configs "packages/*/*"
packages/package-a/package.json is sorted!
packages/package-a/tsconfig.json is sorted!
packages/package-b/package.json is sorted!
packages/package-b/tsconfig.json is sorted!
```

You can use also detect supported configs automatically:
`sort-configs --detect [...globs]`

```sh
$ sort-configs --detect
found sortable configs:
  .eslintrc (sort-configs-eslint installed)
  .yarnrc (sort-configs-yarn installed)
  babel.config.json (sort-configs-babel)
  package.json (sort-configs-npm installed)
  pretter.json (sort-configs-prettier)
  tsconfig.json (sort-configs-typescript installed)
  packages/package-a/package.json (sort-configs-npm installed)
do you want to install the missing plugins (All/yes/no)?
  sort-configs-babel (Y/n)?
  sort-configs-prettier (Y/n)?
```

[npm-image]: https://img.shields.io/npm/v/sort-configs.svg?style=flat
[npm-url]: https://www.npmjs.com/package/sort-configs
[downloads-image]: https://img.shields.io/npm/dm/sort-configs.svg?style=flat
[downloads-url]: https://npmjs.org/package/sort-configs

[github-nodejs]: https://github.com/unional/sort-configs/workflows/nodejs/badge.svg
[github-action-url]: https://github.com/unional/sort-configs/actions
[codecov-image]: https://codecov.io/gh/unional/sort-configs/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/unional/sort-configs
[codacy-grade]: https://api.codacy.com/project/badge/Grade/707f89609508442486050d207ec5bd78
[codacy-grade-url]: https://www.codacy.com/app/homawong/sort-configs?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=unional/sort-configs&amp;utm_campaign=Badge_Grade
[codacy-coverage]: https://api.codacy.com/project/badge/Coverage/707f89609508442486050d207ec5bd78
[codacy-coverage-url]: https://www.codacy.com/manual/homawong/sort-configs?utm_source=github.com&utm_medium=referral&utm_content=unional/sort-configs&utm_campaign=Badge_Coverage

[vscode-image]: https://img.shields.io/badge/vscode-ready-green.svg
[vscode-url]: https://code.visualstudio.com/
