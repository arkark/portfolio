import { HStack, Icon, List, chakra } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

import H3 from "@/components/utils/H3";
import LabelWithInfo from "@/components/utils/LabelWithInfo";
import Link from "@/components/utils/Link";
import ListItemWithIcon from "@/components/utils/ListItemWithIcon";

interface Article {
  date: string;
  label: string;
  url: string;
}

const AboutArticle: React.VFC = () => {
  const articles: Article[] = [
    {
      date: "2020/02/18",
      label: "線形空間𝔽₂^V上の問題に対する連結グラフから全域木への帰着",
      url: "https://ark4rk.hatenablog.com/entry/2020/02/18/044707",
    },
    {
      date: "2019/12/09",
      label: "半環上の最大部分配列問題とKadane's algorithm",
      url: "https://ark4rk.hatenablog.com/entry/2019/12/09/004518",
    },
    {
      date: "2018/03/07",
      label: "bitによる部分集合の列挙 と 数学的理解",
      url: "https://ark4rk.hatenablog.com/entry/2018/03/07/230257",
    },
    {
      date: "2018/01/08",
      label: "Kadane's Algorithm | 最大部分配列 問題",
      url: "https://ark4rk.hatenablog.com/entry/2018/01/08/002508",
    },
    {
      date: "2017/11/05",
      label: "gcd/lcmとmin/maxが同型という話",
      url: "https://ark4rk.hatenablog.com/entry/2017/11/05/190042",
    },
    {
      date: "2017/09/15",
      label: "最小有向全域木を求める | Chu-Liu/Edmonds' algorithm",
      url: "https://ark4rk.hatenablog.com/entry/2017/09/15/011937",
    },
  ];

  return (
    <>
      <H3>Articles</H3>
      <List>
        {articles.map((article, index) => (
          <ListItemWithIcon key={index}>
            <LabelWithInfo
              label={article.label}
              info={
                <>
                  {article.date}
                  <Link ml={1} color="blue.500" href={article.url} isExternal>
                    <Icon as={FaExternalLinkAlt} fontSize={12}></Icon>
                  </Link>
                </>
              }
            ></LabelWithInfo>
          </ListItemWithIcon>
        ))}
      </List>
      <HStack wrap="wrap" spacing={1.5}>
        <chakra.span>More:</chakra.span>
        <Link
          fontWeight="bold"
          color="blue.500"
          href="https://blog.arkark.dev"
          isExternal
        >
          XS-Spin Blog
        </Link>
        <chakra.span>/</chakra.span>
        <Link
          fontWeight="bold"
          color="blue.500"
          href="https://ark4rk.hatenablog.com"
          isExternal
        >
          Old Blog
        </Link>
        <chakra.span>/</chakra.span>
        <Link
          fontWeight="bold"
          color="blue.500"
          href="https://trap.jp/author/ark/"
          isExternal
        >
          traP Blog
        </Link>
      </HStack>
    </>
  );
};

export default AboutArticle;
