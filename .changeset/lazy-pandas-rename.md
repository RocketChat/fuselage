---
'@rocket.chat/fuselage': major
'@rocket.chat/onboarding-ui': patch
---

Remove the deprecated boolean props from `Button`. Use `variant` and `size`:

| Before | After |
| --- | --- |
| `<Button primary>` | `<Button variant='primary'>` |
| `<Button secondary>` | `<Button variant='secondary'>` |
| `<Button danger>` | `<Button variant='danger'>` |
| `<Button warning>` | `<Button variant='warning'>` |
| `<Button success>` | `<Button variant='success'>` |
| `<Button secondary danger>` | `<Button variant='secondary-danger'>` |
| `<Button secondary warning>` | `<Button variant='secondary-warning'>` |
| `<Button secondary success>` | `<Button variant='secondary-success'>` |
| `<Button mini>` | `<Button size='mini'>` |
| `<Button tiny>` | `<Button size='tiny'>` |
| `<Button small>` | `<Button size='small'>` |
| `<Button medium>` | `<Button size='medium'>` |
| `<Button large>` | `<Button size='large'>` |

Two call-site notes:

- `StatesAction` took `primary`, defaulting to `true`. It now takes `variant`,
  defaulting to `'primary'`; `primary={false}` becomes `variant={undefined}`.
- When a button combined `primary` with another color (for example
  `<Button primary danger>`), `primary` won — those call sites are
  `variant='primary'`.

`IconButton` and `ButtonGroup` are unchanged: their `primary`/`small`/`large`
props are current API, not deprecated aliases.
