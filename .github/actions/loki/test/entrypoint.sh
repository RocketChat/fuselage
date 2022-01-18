#!/bin/sh -ex

for pkg in packages/*/package.json; do
  cd "$(dirname $pkg)"
  mv package.json package.json-old
  cat package.json-old | sed s/\.docker/.app/ > package.json
  cd -
done

yarn run loki:test-ci --concurrency=1

for pkg in packages/*/package.json; do
  cd "$(dirname $pkg)"
  mv package.json-old package.json
  cd -
done
