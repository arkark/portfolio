My Portfolio Website
===


[![Netlify Status](https://api.netlify.com/api/v1/badges/a4953dfc-2175-4b70-a50b-c69d8f159d4d/deploy-status)](https://app.netlify.com/sites/ark-portfolio/deploys)
[![Node.js CI](https://github.com/arkark/arkark.github.io/workflows/Node.js%20CI/badge.svg)](https://github.com/arkark/arkark.github.io/actions)

## Links

- https://arkark.dev

[![GitHub](src/assets/shields/github_link.svg)](https://github.com/arkark)
[![Twitter](src/assets/shields/twitter_link.svg)](https://twitter.com/arkark_)
[![Hatena Blog](src/assets/shields/hatenablog_link.svg)](https://ark4rk.hatenablog.com)
[![AtCoder](src/assets/shields/atcoder_link.svg)](https://atcoder.jp/user/arkark)
[![Shadertoy](src/assets/shields/shadertoy_link.svg)](https://www.shadertoy.com/user/Ark)

## Scripts

Resize images:

```fish
$ find src/assets/screenshots/ -type f | sed -E -e '/\.[0-9]+x[0-9]+\.[^\.]+$/d' -e 'p; s/^([^\.]+)\.([^\.]+)$/\1.210x140.\2/g' | xargs -n2 convert -thumbnail 210x140^
$ find src/assets/screenshots/ -type f | sed -E -e '/\.[0-9]+x[0-9]+\.[^\.]+$/d' -e 'p; s/^([^\.]+)\.([^\.]+)$/\1.240x160.\2/g' | xargs -n2 convert -thumbnail 240x160^
```
