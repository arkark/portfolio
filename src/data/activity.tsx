import type TreeType from "@/types/TreeType";

const tree: TreeType = {
  items: [
    {
      content: <b>SECCON CTF</b>,
      items: [
        {
          content: (
            <p>
              2021, 2022 Quals/Finals, 2023 Quals/Finals, 13 Quals/Finals, 14
              Quals/Finals
            </p>
          ),
        },
        {
          content: (
            <p>
              {
                "Awards: サイバーセキュリティに関する総務大臣奨励賞（SECCON CTF運営チーム）"
              }
            </p>
          ),
        },
      ],
    },
    {
      content: <b>IERAE CTF</b>,
      items: [
        {
          content: <p>2024, 2025</p>,
        },
      ],
    },
    {
      content: <b>ASIS CTF</b>,
      items: [
        {
          content: <p>2024 Finals, 2025 Quals</p>,
        },
      ],
    },
    {
      content: <b>AlpacaHack</b>,
      items: [
        {
          content: <p>Round 2, Round 7, Round 11</p>,
        },
        {
          content: <p>Daily AlpacaHack</p>,
        },
      ],
    },
    {
      content: <b>ICC TOKYO 2025</b>,
    },
  ],
};

export default tree;
