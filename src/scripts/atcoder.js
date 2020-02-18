const atcoderLastContest = require("./atcoder-last-contest.json");

const rating = (() => {
  return atcoderLastContest.NewRating;
})();

const colors = {
  black: "#000000",
  gray: "#808080",
  brown: "#804000",
  green: "#008000",
  cyan: "#00C0C0",
  blue: "#0000FF",
  yellow: "#C0C000",
  orange: "#FF8000",
  red: "#FF0000"
};

const getColor = rating => {
  if (rating === null) {
    return colors.black;
  } else if (rating < 400) {
    return colors.gray;
  } else if (rating < 800) {
    return colors.brown;
  } else if (rating < 1200) {
    return colors.green;
  } else if (rating < 1600) {
    return colors.cyan;
  } else if (rating < 2000) {
    return colors.blue;
  } else if (rating < 2400) {
    return colors.yellow;
  } else if (rating < 2800) {
    return colors.orange;
  } else {
    return colors.red;
  }
};

const pairs = [
  ["label", "AtCoder"],
  ["message", `Rating: ${rating}`],
  ["color", getColor(rating)]
];

const encode = str => encodeURIComponent(str);
const queryString = pairs
  .map(pair => `${pair[0]}=${encode(pair[1])}`)
  .join("&");

exports.badgeUrl = `https://img.shields.io/static/v1?${queryString}`;
