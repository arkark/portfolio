import Link from "@/components/utils/Link";
import TreeType from "@/types/TreeType";

const tree: TreeType = {
  items: [
    {
      content: (
        <>
          {"CTF: "}
          <Link href="https://github.com/arkark/my-ctf-challenges">
            my-ctf-challenges
          </Link>
        </>
      ),
      items: [
        {
          content: (
            <>
              <b>SECCON CTF 13 Finals</b>
            </>
          ),
        },
        {
          content: (
            <>
              <b>ASIS CTF Finals 2024</b>
            </>
          ),
        },
        {
          content: (
            <>
              <b>AlpacaHack Round 7 (Web)</b>
            </>
          ),
        },
        {
          content: (
            <>
              <b>SECCON CTF 13 Quals</b>
            </>
          ),
        },
        {
          content: (
            <>
              <b>IERAE CTF 2024</b>
            </>
          ),
        },
        {
          content: (
            <>
              <b>AlpacaHack Round 2 (Web)</b>
            </>
          ),
        },
        {
          content: (
            <>
              <b>SECCON CTF 2023 Finals</b>
            </>
          ),
        },
        {
          content: (
            <>
              <b>IERAE DAYS CTF 2023</b>
            </>
          ),
        },
        {
          content: (
            <>
              <b>SECCON CTF 2023 Quals</b>
            </>
          ),
        },
        {
          content: (
            <>
              <b>SECCON CTF 2022 Finals</b>
            </>
          ),
        },
        {
          content: (
            <>
              <b>SECCON CTF 2022 Quals</b>
            </>
          ),
        },
        {
          content: (
            <>
              <b>SECCON CTF 2021</b>
            </>
          ),
        },
      ],
    },
    {
      content: <>Competitive Programming</>,
      items: [
        {
          content: (
            <>
              <b>東京工業大学プログラミングコンテスト2019</b>
            </>
          ),
        },
      ],
    },
    {
      content: <>Presentations</>,
      items: [
        {
          content: (
            <>
              <b>IERAE NIGHT 2024</b>
              {": 「業務で役に立ったCTFテク」"}
              <Link href="https://www.docswell.com/s/ierae/51RY4E-ierae-night-2024-web">
                link
              </Link>
            </>
          ),
        },
      ],
    },
  ],
};

export default tree;
