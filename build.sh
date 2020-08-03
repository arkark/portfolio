#!/usr/bin/env bash

set -eu -o pipefail

curl -L https://atcoder.jp/users/arkark/history/json | jq '.[-1]' > src/scripts/atcoder-last-contest.json
wget https://projecteuler.net/profile/Ark__.png -O src/assets/project_euler.png
yarn shields
yarn build
