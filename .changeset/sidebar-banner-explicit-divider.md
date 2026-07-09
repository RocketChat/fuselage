---
'@rocket.chat/fuselage': minor
---

Remove the built-in `border-bottom` divider from `SidebarV2Banner`. The separator is no longer forced by the component; place a `SidebarV2Divider` explicitly when a divider is needed. This lets the banner sit flush (e.g. as a bottom-pinned player) or with a divider on either side.
