// Save images for shields.io

const fs = require("fs");
const request = require("request");
const atcoder = require("./atcoder.js");

const items = [];

items.push({
  url: "https://img.shields.io/badge/GitHub-arkark-brightgreen",
  filename: "github_link.svg"
});
items.push({
  url: "https://img.shields.io/badge/Twitter-@arkark__-blue",
  filename: "twitter_link.svg"
});
items.push({
  url: "https://img.shields.io/badge/HatenaBlog-ark4rk-orange",
  filename: "hatenablog_link.svg"
});
items.push({
  url: "https://img.shields.io/badge/AtCoder-arkark-yellow",
  filename: "atcoder_link.svg"
});
items.push({
  url: "https://img.shields.io/badge/Shadertoy-Ark-green",
  filename: "shadertoy_link.svg"
});

items.push({
  url: atcoder.badgeUrl,
  filename: "atcoder_rating.svg"
});

for (const item of items) {
  request(item.url).pipe(
    fs.createWriteStream("src/assets/shields/" + item.filename)
  );
}
