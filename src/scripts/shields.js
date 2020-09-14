// Save images for shields.io

const fs = require("fs");
const request = require("request");
const atcoder = require("./atcoder.js");

const items = [];

items.push({
  url:
    "https://img.shields.io/static/v1?label=GitHub&message=arkark&color=brightgreen&logo=github&logoColor=white",
  filename: "github_link.svg",
});
items.push({
  url:
    "https://img.shields.io/static/v1?label=Twitter&message=@arkark_&color=blue&logo=twitter&logoColor=white",
  filename: "twitter_link.svg",
});
items.push({
  url: "https://img.shields.io/badge/HatenaBlog-ark4rk-orange",
  filename: "hatenablog_link.svg",
});
items.push({
  url: `https://img.shields.io/badge/AtCoder-arkark-${encodeURIComponent(
    atcoder.color
  )}`,
  filename: "atcoder_link.svg",
});

items.push({
  url: atcoder.badgeUrl,
  filename: "atcoder_rating.svg",
});

for (const item of items) {
  const path = "src/assets/shields/" + item.filename;
  request(item.url).pipe(fs.createWriteStream(path));

  // eslint-disable-next-line no-console
  console.log(`* Download '${item.url}' => '${path}'`);
}
