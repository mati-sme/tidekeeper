#!/usr/bin/env bash
# Builds an ad-hoc-signed (not notarized) arm64 Tidekeeper.app on Linux and zips it with symlinks preserved.
set -euo pipefail
cd "$(dirname "$0")/.."
node build.mjs
npx electron-builder --mac dir --arm64
~/.local/bin/rcodesign sign "dist/mac-arm64/Tidekeeper.app"
rm -f dist/Tidekeeper-mac-arm64.zip
(cd dist/mac-arm64 && python3 ../../build/zipapp.py "Tidekeeper.app" ../Tidekeeper-mac-arm64.zip)
ls -la dist/Tidekeeper-mac-arm64.zip
