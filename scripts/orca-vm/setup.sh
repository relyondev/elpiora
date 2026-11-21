#!/usr/bin/env bash
set -euo pipefail
cd -- "$(dirname -- "${BASH_SOURCE[0]}")/../.."

command -v node >/dev/null || { echo 'Install Node.js 22 on the environment first' >&2; exit 1; }
command -v npm >/dev/null || { echo 'Install npm on the environment first' >&2; exit 1; }
node -e 'if (Number(process.versions.node.split(".")[0]) < 22) { console.error("Node.js 22 or newer is required"); process.exit(1); }'
npm ci --no-audit --no-fund
npm run lint
npx --no-install tsc --noEmit
npm run build
