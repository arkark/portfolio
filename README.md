My Portfolio Website
===

[![Build Status](https://travis-ci.com/arkark/arkark.github.io.svg?branch=develop)](https://travis-ci.com/arkark/arkark.github.io)

## Links

[![GitHub Pages](https://img.shields.io/static/v1?label=GitHub+Pages&message=Ark's+page&color=blue&logo=github)](https://arkark.github.io/)
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
