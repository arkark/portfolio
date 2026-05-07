import type TreeType from "@/types/TreeType";

const tree: TreeType = {
  items: [
    {
      content: <b>SECCON CTF</b>,
      items: [
        {
          content: (
            <>
              2021, 2022 Quals/Finals, 2023 Quals/Finals, 13 Quals/Finals, 14
              Quals/Finals
            </>
          ),
        },
        {
          content: (
            <>
              {
                "Awards: サイバーセキュリティに関する総務大臣奨励賞（SECCON CTF運営チーム）"
              }
            </>
          ),
        },
      ],
    },
    {
      content: <b>IERAE CTF</b>,
      items: [
        {
          content: <>2024, 2025</>,
        },
      ],
    },
    {
      content: <b>ASIS CTF</b>,
      items: [
        {
          content: <>2024 Finals, 2025 Quals</>,
        },
      ],
    },
    {
      content: <b>AlpacaHack</b>,
      items: [
        {
          content: <>Round 2, Round 7, Round 11</>,
        },
        {
          content: <>Daily AlpacaHack</>,
        },
      ],
    },
    {
      content: <b>ICC TOKYO 2025</b>,
    },
  ],
};

export default tree;
