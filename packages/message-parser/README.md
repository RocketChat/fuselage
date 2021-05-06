# @rocket.chat/message-parser

## Description

Rocket.Chat grammar with the purpose of parsing the messages of the rocket chat, converting text to an AST tree.

The grammar provides support for markdown, mentions and emojis.

## Supported markup

- quotes
- bold/italic/strike
- ordered lists
- unordered lists
- task lists
- phone numbers
- mentions
- emoji
- colors
- URI's
- mentions users/channels

## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/RocketChat/Rocket.Chat.Fuselage/issues).

Whenever you find a grammar-related bug, start by inserting the test case.

We are open to other tags/markups, as long as they don't generate unexpected behavior.

## Observations and known issues

- Nested lists are unsupported
- `URL` rule doesn't allow ` `, `(`, or `)`
