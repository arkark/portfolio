import Link from "@/components/utils/Link";
import type TreeType from "@/types/TreeType";
import { FaExternalLinkAlt } from "react-icons/fa";

const tree: TreeType = {
  items: [
    {
      content: (
        <p>
          <b>Cross-Site ETag Length Leak</b>{" "}
          <Link href="https://blog.arkark.dev/2025/12/26/etag-length-leak">
            <FaExternalLinkAlt className="inline size-3.5"></FaExternalLinkAlt>
          </Link>
        </p>
      ),
      items: [
        {
          content: (
            <p>
              The 6th of{" "}
              <Link href="https://portswigger.net/research/top-10-web-hacking-techniques-of-2025">
                Top 10 web hacking techniques of 2025
              </Link>
            </p>
          ),
        },
      ],
    },
    {
      content: (
        <p>
          <b>
            Forcing Quirks Mode with PHP Warnings + CSS Exfiltration without
            Network Requests
          </b>{" "}
          <Link href="https://blog.arkark.dev/2025/09/08/asisctf-quals">
            <FaExternalLinkAlt className="inline size-3.5"></FaExternalLinkAlt>
          </Link>
        </p>
      ),
    },
    {
      content: (
        <p>
          <b>見落としがちなURL正規化によるパストラバーサル</b>{" "}
          <Link href="https://gmo-cybersecurity.com/blog/url-path-traversal/">
            <FaExternalLinkAlt className="inline size-3.5"></FaExternalLinkAlt>
          </Link>
        </p>
      ),
    },
  ],
};

export default tree;
