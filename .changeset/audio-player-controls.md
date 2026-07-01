---
'@rocket.chat/fuselage': minor
---

Extracted the presentational, fully controlled `AudioPlayerControls` component from `AudioPlayer` and exported it. It renders the play/pause, seek, elapsed time, playback speed and optional download controls without owning an `<audio>` element or any playback state, so it can be driven by an external/shared media element. `AudioPlayer` keeps its previous self-contained behavior and now composes `AudioPlayerControls` internally, so existing usage is unchanged.
