---
"@rocket.chat/fuselage": minor
---

Simplifies `Accordion` and `AccordionItem`

It removes an obsolete and not accessible toggle switch in `AccordionItem` and eases the internal usage of `Box` to
improve rendering performance.

Additionally, it adds a new `StylingBox` component that can be used as a wrapper for components that accept styling
props but don't need the weight of the `Box` component prop handling internally.

Also, it adds a new `cx` and `cxx` helpers to compose class names.
