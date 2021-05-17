<!--header-->

<p align="center">
  <a href="https://rocket.chat" title="Rocket.Chat">
    <img src="https://github.com/RocketChat/Rocket.Chat.Artwork/raw/master/Logos/2020/png/logo-horizontal-red.png" alt="Rocket.Chat" />
  </a>
</p>

# `@rocket.chat/eslint-config-alt`

> ESLint configuration for Rocket.Chat repositories

---

![npm@latest](https://img.shields.io/npm/v/@rocket.chat/eslint-config-alt/latest?style=flat-square) ![npm@next](https://img.shields.io/npm/v/@rocket.chat/eslint-config-alt/next?style=flat-square) ![npm downloads](https://img.shields.io/npm/dw/@rocket.chat/eslint-config-alt?style=flat-square) ![License: MIT](https://img.shields.io/npm/l/@rocket.chat/eslint-config-alt?style=flat-square)

![deps](https://img.shields.io/david/RocketChat/Rocket.Chat.Fuselage?path=packages%2Feslint-config-alt&style=flat-square) ![peer deps](https://img.shields.io/david/peer/RocketChat/Rocket.Chat.Fuselage?path=packages%2Feslint-config-alt&style=flat-square) ![dev deps](https://img.shields.io/david/dev/RocketChat/Rocket.Chat.Fuselage?path=packages%2Feslint-config-alt&style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@rocket.chat/eslint-config-alt?style=flat-square)

<!--/header-->

## Install

<!--install(dev)-->

Firstly, install the peer dependencies (prerequisites):

```sh
npm i -D @babel/eslint-parser eslint prettier

# or, if you are using yarn:

yarn add -D @babel/eslint-parser eslint prettier
```

Add `@rocket.chat/eslint-config-alt` as a dependency:

```sh
npm i -D @rocket.chat/eslint-config-alt

# or, if you are using yarn:

yarn add -D @rocket.chat/eslint-config-alt
```

<!--/install(dev)-->

## Contributing

<!--contributing(msg)-->

Contributions, issues, and feature requests are welcome!<br />
Feel free to check the [issues](https://github.com/RocketChat/Rocket.Chat.Fuselage/issues).

<!--/contributing(msg)-->

### Linting

To ensure the source is matching our coding style, we perform [linting](<https://en.wikipedia.org/wiki/Lint_(software)>).
Before commiting, check if your code fits our style by running:

<!--yarn(lint)-->

```sh
yarn lint
```

<!--/yarn(lint)-->

Some linter warnings and errors can be automatically fixed:

<!--yarn(lint-fix)-->

```sh
yarn lint-fix
```

<!--/yarn(lint-fix)-->
