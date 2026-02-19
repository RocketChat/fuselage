#!/bin/bash
set -e

# Script to run Playwright visual regression tests in Docker
# Storybook should be running on the host system at port 6006

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# Get the fuselage package directory (parent of scripts)
FUSELAGE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
# Get the monorepo root (3 levels up from scripts: scripts -> fuselage -> packages -> root)
MONOREPO_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"

# Docker image name
IMAGE_NAME="fuselage-playwright"
IMAGE_TAG="latest"

# Check if update-snapshots flag is passed
UPDATE_SNAPSHOTS=""
if [[ "$*" == *"--update-snapshots"* ]]; then
  UPDATE_SNAPSHOTS="--update-snapshots"
fi

# Build Docker image if it doesn't exist or if --build flag is passed
if [[ "$*" == *"--build"* ]] || ! docker image inspect "${IMAGE_NAME}:${IMAGE_TAG}" &>/dev/null; then
  echo "Building Docker image..."
  docker build \
    -f "${FUSELAGE_DIR}/Dockerfile.playwright" \
    -t "${IMAGE_NAME}:${IMAGE_TAG}" \
    "${MONOREPO_ROOT}"
fi

# Run Playwright tests in Docker container
# Using recommended flags from Playwright Docker documentation:
# - --init: avoids zombie processes
# - --ipc=host: prevents Chromium memory issues
# - --add-host=hostmachine:host-gateway: allows container to access host's Storybook
echo "Running Playwright tests in Docker container..."
docker run --rm \
  --init \
  --ipc=host \
  --add-host=hostmachine:host-gateway \
  -e TEST_BASE_URL="http://hostmachine:6006" \
  -e CI="${CI:-false}" \
  -v "${MONOREPO_ROOT}:/app" \
  -v "${FUSELAGE_DIR}/storybook-static:/app/packages/fuselage/storybook-static:ro" \
  -v "${FUSELAGE_DIR}/test/snapshots:/app/packages/fuselage/test/snapshots" \
  -v "${FUSELAGE_DIR}/test-results:/app/packages/fuselage/test-results" \
  -w /app/packages/fuselage \
  "${IMAGE_NAME}:${IMAGE_TAG}" \
  yarn playwright test ${UPDATE_SNAPSHOTS}

echo "Playwright tests completed!"

