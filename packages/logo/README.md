<!--header-->

<p align="center">
  <a href="https://rocket.chat" title="Rocket.Chat">
    <img src="https://github.com/RocketChat/Rocket.Chat.Artwork/raw/master/Logos/2020/png/logo-horizontal-red.png" alt="Rocket.Chat" />
  </a>
</p>

# `@rocket.chat/logo`

> Rocket.Chat logo package

---

[![npm@latest](https://img.shields.io/npm/v/@rocket.chat/logo/latest?style=flat-square)](https://www.npmjs.com/package/@rocket.chat/logo/v/latest) [![npm@next](https://img.shields.io/npm/v/@rocket.chat/logo/next?style=flat-square)](https://www.npmjs.com/package/@rocket.chat/logo/v/next) ![react version](https://img.shields.io/npm/dependency-version/@rocket.chat/logo/peer/react?style=flat-square) ![npm downloads](https://img.shields.io/npm/dw/@rocket.chat/logo?style=flat-square) ![License: MIT](https://img.shields.io/npm/l/@rocket.chat/logo?style=flat-square)

![deps](https://img.shields.io/librariesio/release/npm/@rocket.chat/logo?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@rocket.chat/logo?style=flat-square)

<!--/header-->

## Install

<!--install-->

Firstly, install the peer dependencies (prerequisites):

```sh
npm i react react-dom

# or, if you are using yarn:

yarn add react react-dom
```

Add `@rocket.chat/logo` as a dependency:

```sh
npm i @rocket.chat/logo

# or, if you are using yarn:

yarn add @rocket.chat/logo
```

<!--/install-->

## Contributing

<!--contributing(msg)-->

Contributions, issues, and feature requests are welcome!<br />
Feel free to check the [issues](https://github.com/RocketChat/fuselage/issues).

<!--/contributing(msg)-->

### Building

As this package dependends on others in this monorepo, before anything run the following at the root directory:

<!--yarn(build)-->

```sh
yarn build
```

<!--/yarn(build)-->

### Linting

To ensure the source is matching our coding style, we perform [linting](<https://en.wikipedia.org/wiki/Lint_(software)>).
Before commiting, check if your code fits our style by running:

<!--yarn(lint)-->

```sh
yarn lint
```

<!--/yarn(lint)-->

Some linter warnings and errors can be automatically fixed:

<!--yarn(lint-and-fix)-->

```sh
yarn lint-and-fix
```

<!--/yarn(lint-and-fix)-->

### Running tests

Whenever possible, add tests to describe exactly what your code do. You can run them by yourself:

<!--yarn(test)-->

```sh
yarn test
```

<!--/yarn(test)-->
