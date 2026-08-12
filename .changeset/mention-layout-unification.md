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
containing a mention is no longer taller than one without it. Their focus ring
is drawn with an `outline` rather than a reserved transparent border, so a
mention no longer carries a fixed 1px on each side and the spacing around it
comes from the text alone.

Theme variables: `message-highlight-colors-background-*` and
`message-highlight-border-radius` were removed. The `link` variant now reads
its own `message-highlight-colors-link-color` variable — it previously shared
`message-highlight-colors-other-color` with the `other` variant, so the two
could not be themed independently.
