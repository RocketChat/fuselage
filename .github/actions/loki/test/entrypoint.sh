#!/bin/sh -ex

mv package.json package.json-old
cat package.json-old | sed s/\.docker/.app/ > package.json

yarn run loki:test-ci --concurrency=1

mv package.json-old package.json
