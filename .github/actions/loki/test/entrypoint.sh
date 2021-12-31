#!/bin/sh -ex

echo Force rebuild

yarn run loki:test \
  test \
  --chromeFlags='--headless --no-sandbox --disable-gpu --disable-features=VizDisplayCompositor' \
  --verboseRenderer \
  --requireReference \
  --reactUri file:$INPUT_REACT_URI
