#!/bin/sh -ex

echo Force rebuild

yarn run loki:test-ci
