#!/bin/sh -ex

cd packages/$5
mv package.json package.json-old
cat package.json-old | sed s/\.docker/.app/ > package.json

regex=''
if [ "$5" = "fuselage" ]; then
    regex=$1
elif [ "$5" = "fuselage-toastbar" ]; then
    regex=$2
elif [ "$5" = "layout" ]; then
    regex=$3
elif [ "$5" = "onboarding-ui" ]; then
    regex=$4
else
    regex="null"
fi

if [ "$regex" = "skip" ]; then 
    echo "skipping visual test for $5"
elif [ "$regex" = "full test" ]; then 
    yarn loki:test-ci --chromeConcurrency=1
else
    yarn loki test --chromeConcurrency=1 --chromeFlags='--headless --no-sandbox --disable-gpu --disable-features=VizDisplayCompositor' --requireReference --verboseRenderer --reactUri file:./storybook-static --storiesFilter="$regex"
fi

mv package.json-old package.json

# for pkg in packages/*/package.json; do
#   cd "$(dirname $pkg)"
#   mv package.json package.json-old
#   cat package.json-old | sed s/\.docker/.app/ > package.json
#   cd -
# done

# echo "$1"

# for pkg in packages/*/package.json; do
#   cd "$(dirname $pkg)"
#   mv package.json-old package.json
#   cd -
# done

# echo "fuselage: $1"
# echo "fuselage-toastbar: $2"
# echo "layout: $3"
# echo "onboarding-ui: $4"
