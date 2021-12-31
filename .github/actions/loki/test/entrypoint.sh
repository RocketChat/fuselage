#!/bin/sh -ex

echo Force rebuild

yarn run loki:test \
  --chromeFlags='--headless --no-sandbox --disable-gpu --disable-features=VizDisplayCompositor' \
  --verboseRenderer \
  --requireReference \
