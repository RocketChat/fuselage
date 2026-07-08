#!/bin/bash
set -e

# Script to run Playwright visual regression tests in Docker.
# Storybook should be running on the host system at port 6006.
#
# Environment variables (set by bin/index.js):
#   PACKAGE_DIR  - absolute path to the consuming package (e.g. /repo/packages/fuselage)

PACKAGE_DIR="${PACKAGE_DIR:-$(pwd)}"

# Derive monorepo root from git
MONOREPO_ROOT="$(git -C "${PACKAGE_DIR}" rev-parse --show-toplevel)"

# Relative path of consuming package inside the monorepo (e.g. packages/fuselage)
REL_PACKAGE_PATH="$(node -e "console.log(require('path').relative('${MONOREPO_ROOT}', '${PACKAGE_DIR}'))")"


BASE_URL="http://host.docker.internal:6006"

# Check if update-snapshots flag is passed
UPDATE_SNAPSHOTS=""
if [[ "$*" == *"--update-snapshots"* ]]; then
  UPDATE_SNAPSHOTS="--update-snapshots"
fi

DOCKER_PW_IMAGE="mcr.microsoft.com/playwright:v1.58.2-noble"

echo "Running Playwright tests in Docker container for ${REL_PACKAGE_PATH} with env:"
echo "PACKAGE_DIR: ${PACKAGE_DIR}"
echo "MONOREPO_ROOT: ${MONOREPO_ROOT}"
echo "REL_PACKAGE_PATH: ${REL_PACKAGE_PATH}"
echo "TEST_BASE_URL: ${BASE_URL}"
echo "CI: ${CI:-false}"
echo "UPDATE_SNAPSHOTS: ${UPDATE_SNAPSHOTS}"
echo "DOCKER_PW_IMAGE: ${DOCKER_PW_IMAGE}"

docker run --rm \
  --init \
  --ipc=host \
  --add-host=host.docker.internal:host-gateway \
  -e TEST_BASE_URL="${BASE_URL}" \
  -e CI="${CI:-false}" \
  -e PACKAGE_DIR="/app/${REL_PACKAGE_PATH}" \
  -v "${MONOREPO_ROOT}:/app" \
  -w "/app/${REL_PACKAGE_PATH}" \
  "${DOCKER_PW_IMAGE}" \
  npx -y playwright@1.58.2 test --config="/app/tools/visual-regression/playwright.config.ts" ${UPDATE_SNAPSHOTS}

echo "Playwright tests completed!"
