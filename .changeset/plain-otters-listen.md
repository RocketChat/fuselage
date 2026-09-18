---
'@rocket.chat/fuselage': patch
---

Publish `registry.json`, a machine-readable catalog of every exported component
(props, string-literal variants, deprecations, design usage rules and test
coverage), generated from source. Coding agents and tooling can read it from the
installed package instead of guessing the component API.
