<!--header-->

<p align="center">
  <a href="https://rocket.chat" title="Rocket.Chat">
    <img src="https://github.com/RocketChat/Rocket.Chat.Artwork/raw/master/Logos/2020/png/logo-horizontal-red.png" alt="Rocket.Chat" />
  </a>
</p>

# `@rocket.chat/ui-kit`

> Interactive UI elements for Rocket.Chat Apps

---

[![npm@latest](https://img.shields.io/npm/v/@rocket.chat/ui-kit/latest?style=flat-square)](https://www.npmjs.com/package/@rocket.chat/ui-kit/v/latest) [![npm@next](https://img.shields.io/npm/v/@rocket.chat/ui-kit/next?style=flat-square)](https://www.npmjs.com/package/@rocket.chat/ui-kit/v/next) ![npm downloads](https://img.shields.io/npm/dw/@rocket.chat/ui-kit?style=flat-square) ![License: MIT](https://img.shields.io/npm/l/@rocket.chat/ui-kit?style=flat-square)

![deps](https://img.shields.io/librariesio/release/npm/@rocket.chat/ui-kit?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@rocket.chat/ui-kit?style=flat-square)

<!--/header-->

## Install

<!--install-->

Firstly, install the peer dependencies (prerequisites):

```sh
npm i @rocket.chat/icons

# or, if you are using yarn:

yarn add @rocket.chat/icons
```

Add `@rocket.chat/ui-kit` as a dependency:

```sh
npm i @rocket.chat/ui-kit

# or, if you are using yarn:

yarn add @rocket.chat/ui-kit
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

## Documentation

### Block elements

<!--block-elements-->

#### ButtonElement

| Field                  | Type                                                                          | Required | Description |
| ---------------------- | ----------------------------------------------------------------------------- | -------- | ----------- |
| `type`                 | `"button"`                                                                    | Yes      |
| `text`                 | `PlainText`                                                                   | Yes      |
| `url`                  | `string \| undefined`                                                         | No       |
| `value`                | `string \| undefined`                                                         | No       |
| `style`                | `"primary" \| "secondary" \| "danger" \| "warning" \| "success" \| undefined` | No       |
| `secondary`            | `boolean \| undefined`                                                        | No       |
| `appId`                | `string`                                                                      | Yes      |
| `blockId`              | `string`                                                                      | Yes      |
| `actionId`             | `string`                                                                      | Yes      |
| `confirm`              | `ConfirmationDialog \| undefined`                                             | No       |
| `dispatchActionConfig` | `InputElementDispatchAction[] \| undefined`                                   | No       |

#### ChannelsSelectElement

| Field                  | Type                                        | Required | Description |
| ---------------------- | ------------------------------------------- | -------- | ----------- |
| `type`                 | `"channels_select"`                         | Yes      |
| `appId`                | `string`                                    | Yes      |
| `blockId`              | `string`                                    | Yes      |
| `actionId`             | `string`                                    | Yes      |
| `confirm`              | `ConfirmationDialog \| undefined`           | No       |
| `dispatchActionConfig` | `InputElementDispatchAction[] \| undefined` | No       |

#### ConversationsSelectElement

| Field                  | Type                                        | Required | Description |
| ---------------------- | ------------------------------------------- | -------- | ----------- |
| `type`                 | `"conversations_select"`                    | Yes      |
| `appId`                | `string`                                    | Yes      |
| `blockId`              | `string`                                    | Yes      |
| `actionId`             | `string`                                    | Yes      |
| `confirm`              | `ConfirmationDialog \| undefined`           | No       |
| `dispatchActionConfig` | `InputElementDispatchAction[] \| undefined` | No       |

#### DatePickerElement

| Field                  | Type                                        | Required | Description |
| ---------------------- | ------------------------------------------- | -------- | ----------- |
| `type`                 | `"datepicker"`                              | Yes      |
| `placeholder`          | `TextObject \| undefined`                   | No       |
| `initialDate`          | `string \| undefined`                       | No       |
| `appId`                | `string`                                    | Yes      |
| `blockId`              | `string`                                    | Yes      |
| `actionId`             | `string`                                    | Yes      |
| `confirm`              | `ConfirmationDialog \| undefined`           | No       |
| `dispatchActionConfig` | `InputElementDispatchAction[] \| undefined` | No       |

#### ImageElement

| Field      | Type      | Required | Description |
| ---------- | --------- | -------- | ----------- |
| `type`     | `"image"` | Yes      |
| `imageUrl` | `string`  | Yes      |
| `altText`  | `string`  | Yes      |

#### LinearScaleElement

| Field                  | Type                                        | Required | Description |
| ---------------------- | ------------------------------------------- | -------- | ----------- |
| `type`                 | `"linear_scale"`                            | Yes      |
| `minValue`             | `number \| undefined`                       | No       |
| `maxValue`             | `number \| undefined`                       | No       |
| `initialValue`         | `number \| undefined`                       | No       |
| `preLabel`             | `PlainText \| undefined`                    | No       |
| `postLabel`            | `PlainText \| undefined`                    | No       |
| `appId`                | `string`                                    | Yes      |
| `blockId`              | `string`                                    | Yes      |
| `actionId`             | `string`                                    | Yes      |
| `confirm`              | `ConfirmationDialog \| undefined`           | No       |
| `dispatchActionConfig` | `InputElementDispatchAction[] \| undefined` | No       |

#### MultiChannelsSelectElement

| Field                  | Type                                        | Required | Description |
| ---------------------- | ------------------------------------------- | -------- | ----------- |
| `type`                 | `"multi_channels_select"`                   | Yes      |
| `appId`                | `string`                                    | Yes      |
| `blockId`              | `string`                                    | Yes      |
| `actionId`             | `string`                                    | Yes      |
| `confirm`              | `ConfirmationDialog \| undefined`           | No       |
| `dispatchActionConfig` | `InputElementDispatchAction[] \| undefined` | No       |

#### MultiConversationsSelectElement

| Field                  | Type                                        | Required | Description |
| ---------------------- | ------------------------------------------- | -------- | ----------- |
| `type`                 | `"multi_conversations_select"`              | Yes      |
| `appId`                | `string`                                    | Yes      |
| `blockId`              | `string`                                    | Yes      |
| `actionId`             | `string`                                    | Yes      |
| `confirm`              | `ConfirmationDialog \| undefined`           | No       |
| `dispatchActionConfig` | `InputElementDispatchAction[] \| undefined` | No       |

#### MultiStaticSelectElement

| Field                  | Type                                        | Required | Description |
| ---------------------- | ------------------------------------------- | -------- | ----------- |
| `type`                 | `"multi_static_select"`                     | Yes      |
| `placeholder`          | `TextObject`                                | Yes      |
| `options`              | `readonly Option[]`                         | Yes      |
| `optionGroups`         | `readonly OptionGroup[] \| undefined`       | No       |
| `maxSelectItems`       | `number \| undefined`                       | No       |
| `initialValue`         | `string[] \| undefined`                     | No       |
| `initialOption`        | `Option[] \| undefined`                     | No       |
| `appId`                | `string`                                    | Yes      |
| `blockId`              | `string`                                    | Yes      |
| `actionId`             | `string`                                    | Yes      |
| `confirm`              | `ConfirmationDialog \| undefined`           | No       |
| `dispatchActionConfig` | `InputElementDispatchAction[] \| undefined` | No       |

#### MultiUsersSelectElement

| Field                  | Type                                        | Required | Description |
| ---------------------- | ------------------------------------------- | -------- | ----------- |
| `type`                 | `"multi_users_select"`                      | Yes      |
| `appId`                | `string`                                    | Yes      |
| `blockId`              | `string`                                    | Yes      |
| `actionId`             | `string`                                    | Yes      |
| `confirm`              | `ConfirmationDialog \| undefined`           | No       |
| `dispatchActionConfig` | `InputElementDispatchAction[] \| undefined` | No       |

#### OverflowElement

| Field                  | Type                                        | Required | Description |
| ---------------------- | ------------------------------------------- | -------- | ----------- |
| `type`                 | `"overflow"`                                | Yes      |
| `options`              | `readonly Option[]`                         | Yes      |
| `appId`                | `string`                                    | Yes      |
| `blockId`              | `string`                                    | Yes      |
| `actionId`             | `string`                                    | Yes      |
| `confirm`              | `ConfirmationDialog \| undefined`           | No       |
| `dispatchActionConfig` | `InputElementDispatchAction[] \| undefined` | No       |

#### PlainTextInputElement

| Field                  | Type                                        | Required | Description |
| ---------------------- | ------------------------------------------- | -------- | ----------- |
| `type`                 | `"plain_text_input"`                        | Yes      |
| `placeholder`          | `PlainText \| undefined`                    | No       |
| `initialValue`         | `string \| undefined`                       | No       |
| `multiline`            | `boolean \| undefined`                      | No       |
| `minLength`            | `number \| undefined`                       | No       |
| `maxLength`            | `number \| undefined`                       | No       |
| `appId`                | `string`                                    | Yes      |
| `blockId`              | `string`                                    | Yes      |
| `actionId`             | `string`                                    | Yes      |
| `confirm`              | `ConfirmationDialog \| undefined`           | No       |
| `dispatchActionConfig` | `InputElementDispatchAction[] \| undefined` | No       |

#### StaticSelectElement

| Field                  | Type                                        | Required | Description |
| ---------------------- | ------------------------------------------- | -------- | ----------- |
| `type`                 | `"static_select"`                           | Yes      |
| `placeholder`          | `TextObject`                                | Yes      |
| `options`              | `readonly Option[]`                         | Yes      |
| `optionGroups`         | `readonly OptionGroup[] \| undefined`       | No       |
| `initialOption`        | `Option \| undefined`                       | No       |
| `initialValue`         | `string \| undefined`                       | No       |
| `appId`                | `string`                                    | Yes      |
| `blockId`              | `string`                                    | Yes      |
| `actionId`             | `string`                                    | Yes      |
| `confirm`              | `ConfirmationDialog \| undefined`           | No       |
| `dispatchActionConfig` | `InputElementDispatchAction[] \| undefined` | No       |

#### UsersSelectElement

| Field                  | Type                                        | Required | Description |
| ---------------------- | ------------------------------------------- | -------- | ----------- |
| `type`                 | `"users_select"`                            | Yes      |
| `appId`                | `string`                                    | Yes      |
| `blockId`              | `string`                                    | Yes      |
| `actionId`             | `string`                                    | Yes      |
| `confirm`              | `ConfirmationDialog \| undefined`           | No       |
| `dispatchActionConfig` | `InputElementDispatchAction[] \| undefined` | No       |

#### ToggleSwitchElement

| Field                  | Type                                        | Required | Description |
| ---------------------- | ------------------------------------------- | -------- | ----------- |
| `type`                 | `"toggle_switch"`                           | Yes      |
| `options`              | `Option[]`                                  | Yes      |
| `initialOptions`       | `Option[] \| undefined`                     | No       |
| `appId`                | `string`                                    | Yes      |
| `blockId`              | `string`                                    | Yes      |
| `actionId`             | `string`                                    | Yes      |
| `confirm`              | `ConfirmationDialog \| undefined`           | No       |
| `dispatchActionConfig` | `InputElementDispatchAction[] \| undefined` | No       |

#### RadioButtonElement

| Field                  | Type                                        | Required | Description |
| ---------------------- | ------------------------------------------- | -------- | ----------- |
| `type`                 | `"radio_button"`                            | Yes      |
| `options`              | `Option[]`                                  | Yes      |
| `initialOption`        | `Option \| undefined`                       | No       |
| `appId`                | `string`                                    | Yes      |
| `blockId`              | `string`                                    | Yes      |
| `actionId`             | `string`                                    | Yes      |
| `confirm`              | `ConfirmationDialog \| undefined`           | No       |
| `dispatchActionConfig` | `InputElementDispatchAction[] \| undefined` | No       |

#### CheckboxElement

| Field                  | Type                                        | Required | Description |
| ---------------------- | ------------------------------------------- | -------- | ----------- |
| `type`                 | `"checkbox"`                                | Yes      |
| `options`              | `Option[]`                                  | Yes      |
| `initialOptions`       | `Option[] \| undefined`                     | No       |
| `appId`                | `string`                                    | Yes      |
| `blockId`              | `string`                                    | Yes      |
| `actionId`             | `string`                                    | Yes      |
| `confirm`              | `ConfirmationDialog \| undefined`           | No       |
| `dispatchActionConfig` | `InputElementDispatchAction[] \| undefined` | No       |

#### TimePickerElement

| Field                  | Type                                        | Required | Description |
| ---------------------- | ------------------------------------------- | -------- | ----------- |
| `type`                 | `"time_picker"`                             | Yes      |
| `placeholder`          | `TextObject \| undefined`                   | No       |
| `initialTime`          | `number \| undefined`                       | No       |
| `appId`                | `string`                                    | Yes      |
| `blockId`              | `string`                                    | Yes      |
| `actionId`             | `string`                                    | Yes      |
| `confirm`              | `ConfirmationDialog \| undefined`           | No       |
| `dispatchActionConfig` | `InputElementDispatchAction[] \| undefined` | No       |

<!--/block-elements-->
