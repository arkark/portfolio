#!/usr/bin/env bash

set -eu -o pipefail

curl -L https://atcoder.jp/users/arkark/history/json | jq '.[-1]' > src/scripts/atcoder-last-contest.json
yarn shields
yarn build
