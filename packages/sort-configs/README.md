# sort-configs

[`sort-configs`](https://github.com/unional/sort-configs) sorts all kinds of configuration files.

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
`sort-configs --detect [...dirs]`

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
  sort-configs-prettier (Y/n)
```
