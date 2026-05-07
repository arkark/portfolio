import Link from "@/components/utils/Link";
import type TreeType from "@/types/TreeType";

const tree: TreeType = {
  items: [
    {
      content: (
        <p>
          <Link href="https://www.docswell.com/s/ierae/ZG17DX-hacknight01-algo">
            アルゴリズムで解決するCTF Web問
          </Link>{" "}
          | GMO IERAE HackNight #1 「Webセキュリティ編」
        </p>
      ),
    },
    {
      content: (
        <p>
          <Link href="https://www.docswell.com/s/ierae/51RY4E-ierae-night-2024-web">
            業務で役に立ったCTFテク
          </Link>{" "}
          | IERAE NIGHT 2024
        </p>
      ),
    },
  ],
};

export default tree;
