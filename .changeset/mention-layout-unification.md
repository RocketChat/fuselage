---
'@rocket.chat/fuselage': minor
---

feat(fuselage)!: Render message mentions as plain text instead of pills

Mentions no longer render as a pill with a background. They now behave as
regular text styled with a distinct font color and medium (p2m) weight,
matching the Mobile client: `critical` (mentions of you) uses the
`status-font-on-danger` token, `relevant` (`@all`/`@here`) uses
`status-font-on-service-1`, `link` (rooms) uses `status-font-on-info`, and
`other` (mentions of other users) uses `status-font-on-warning`.

Highlights are now `display: inline` instead of `inline-block`, so a line
containing a mention is no longer taller than one without it.

The `message-highlight-colors-background-*` and
`message-highlight-border-radius` theme variables were removed.
