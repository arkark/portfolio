// Save images for shields.io

const fs = require("fs");
const request = require("request");
const atcoder = require("./atcoder.js");

const items = [];

items.push({
  url:
    "https://img.shields.io/static/v1?style=plastic&label=GitHub&message=arkark&color=brightgreen&logo=github&logoColor=white",
  filename: "github_link.svg",
});
items.push({
  url:
    "https://img.shields.io/static/v1?style=plastic&label=Twitter&message=@arkark_&color=blue&logo=twitter&logoColor=white",
  filename: "twitter_link.svg",
});
items.push({
  url:
    "https://img.shields.io/static/v1?style=plastic&label=HatenaBlog&message=ark4rk&color=orange",
  filename: "hatenablog_link.svg",
});
items.push({
  url: `https://img.shields.io/static/v1?style=plastic&label=AtCoder&message=arkark&color=${encodeURIComponent(
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
