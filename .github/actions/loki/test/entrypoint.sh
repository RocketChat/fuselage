#!/bin/sh -ex

for pkg in packages/*/package.json; do
  cd "$(dirname $pkg)"
  mv package.json package.json-old
  cat package.json-old | sed s/\.docker/.app/ > package.json
  cd -
done

echo "$1"

for pkg in packages/*/package.json; do
  cd "$(dirname $pkg)"
  mv package.json-old package.json
  cd -
done

echo "fuselage: $1"
echo "fuselage-toastbar: $2"
echo "layout: $3"
echo "onboarding-ui: $4"
