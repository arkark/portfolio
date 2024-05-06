import Link from "@/components/utils/Link";
import TreeType from "@/types/TreeType";

const tree: TreeType = {
  items: [
    {
      content: (
        <>
          <b>SECCON CTF 2023</b>: 運営・作問
        </>
      ),
      items: [
        {
          content: (
            <>
              {"My challenges (Quals): "}
              <Link href="https://github.com/arkark/my-ctf-challenges#seccon-ctf-2023-quals">
                link
              </Link>
            </>
          ),
        },
        {
          content: (
            <>
              {"My challenges (Finals): "}
              <Link href="https://github.com/arkark/my-ctf-challenges#seccon-ctf-2023-finals">
                link
              </Link>
            </>
          ),
        },
      ],
    },
    {
      content: (
        <>
          <b>SECCON CTF 2022</b>: 運営・作問
        </>
      ),
      items: [
        {
          content: (
            <>
              {"My challenges (Quals): "}
              <Link href="https://github.com/arkark/my-ctf-challenges#seccon-ctf-2022-quals">
                link
              </Link>
            </>
          ),
        },
        {
          content: (
            <>
              {"My challenges (Finals): "}
              <Link href="https://github.com/arkark/my-ctf-challenges#seccon-ctf-2022-finals">
                link
              </Link>
            </>
          ),
        },
        {
          content: (
            <>
              {"サイバーセキュリティに関する総務大臣奨励賞: "}
              <Link href="https://www.soumu.go.jp/menu_news/s-news/01cyber01_02000001_00158.html">
                link
              </Link>
            </>
          ),
        },
      ],
    },
    {
      content: (
        <>
          <b>SECCON CTF 2021</b>: 運営・作問
        </>
      ),
      items: [
        {
          content: (
            <>
              {"My challenges: "}
              <Link href="https://github.com/arkark/my-ctf-challenges#seccon-ctf-2021">
                link
              </Link>
            </>
          ),
        },
      ],
    },
    {
      content: (
        <>
          <b>東京工業大学プログラミングコンテスト2019</b>: 運営・作問
        </>
      ),
      items: [
        {
          content: (
            <>
              {"Contest page: "}
              <Link href="https://atcoder.jp/contests/ttpc2019">link</Link>
            </>
          ),
        },
      ],
    },
    {
      content: (
        <>
          <b>
            ゲーム制作者交流イベント GAME<sup>3</sup>
          </b>
          （第3回, 第4回）: 運営
        </>
      ),
      items: [
        {
          content: (
            <>
              {"Event page: "}
              <Link href="https://game3.trap.games/">link</Link>
            </>
          ),
        },
      ],
    },
  ],
};

export default tree;
