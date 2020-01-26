export default {
  id: "1",
  label: '活動<span class="caption pl-2">&lt;運営に関わったイベント&gt;</span>',
  rawHtml: true,
  icon: "fas fa-calendar-day",
  children: [
    {
      id: "1-2",
      label: "TTPC",
      children: [
        {
          id: "1-2-1",
          label: "東京工業大学プログラミングコンテスト2019",
          url: "https://atcoder.jp/contests/ttpc2019"
        }
      ]
    },
    {
      id: "1-1",
      label: "GAME<sup>3</sup>",
      rawHtml: true,
      url: "https://game3.trap.jp/",
      children: [
        {
          id: "1-1-2",
          label: "第4回ゲーム製作者交流会GAME<sup>3</sup>",
          rawHtml: true,
          url: "https://game3.trap.jp/report/4th/"
        },
        {
          id: "1-1-1",
          label: "第3回ゲーム製作者交流会GAME<sup>3</sup>",
          rawHtml: true,
          url: "https://game3.trap.jp/report/3rd/"
        }
      ]
    }
  ]
};
