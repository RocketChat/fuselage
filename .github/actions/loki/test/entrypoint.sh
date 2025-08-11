#!/bin/sh -ex

for pkg in packages/*/package.json; do
  cd "$(dirname $pkg)"
  mv package.json package.json-old
  cat package.json-old | sed s/\.docker/.app/ > package.json
  cd -
done

storybookPkgs="packages/fuselage packages/fuselage-toastbar packages/layout packages/onboarding-ui"
arg=1

for pkg in $storybookPkgs; do
    cd $pkg
    arg_value=$(eval "echo \$$arg")
    if [ "$arg_value" = "skip" ]; then 
        echo "skipping visual tests for $pkg"
    elif [ "$arg_value" = "full test" ]; then 
        # yarn loki:test-ci
        echo 'full-test'
    else
        yarn loki test --chromeConcurrency=2 --chromeFlags='--headless --no-sandbox --disable-gpu --disable-features=VizDisplayCompositor' --requireReference --verboseRenderer --reactUri file:./storybook-static --storiesFilter="$arg"
    fi
    arg=$((arg + 1))
    cd -
done

for pkg in packages/*/package.json; do
  cd "$(dirname $pkg)"
  mv package.json-old package.json
  cd -
done

echo "fuselage: $1"
echo "fuselage-toastbar: $2"
echo "layout: $3"
echo "onboarding-ui: $4"
