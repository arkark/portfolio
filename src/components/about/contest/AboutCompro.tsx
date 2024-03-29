import { List, Text, chakra } from "@chakra-ui/react";

import ContestListItem from "@/components/about/contest/ContestListItem";
import comproData from "@/components/about/data/comproData";
import H4 from "@/components/utils/H4";
import Link from "@/components/utils/Link";

const AboutCompro: React.FC = () => {
  const contests = comproData;

  return (
    <>
      <H4>Competitive Programming</H4>
      <Text>
        {"AtCoder: "}
        <Link
          fontWeight="bold"
          href="https://atcoder.jp/users/arkark"
          isExternal
        >
          <chakra.span color="#0000FF">1900+</chakra.span>
        </Link>
      </Text>
      <List>
        {contests.map((contest, index) => (
          <ContestListItem key={index} contest={contest}></ContestListItem>
        ))}
      </List>
    </>
  );
};

export default AboutCompro;
