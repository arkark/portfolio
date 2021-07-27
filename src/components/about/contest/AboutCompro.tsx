import { Heading, List, Text, chakra } from "@chakra-ui/react";

import ContestListItem from "@/components/about/contest/ContestListItem";
import comproData from "@/components/about/contest/data/comproData";
import Link from "@/components/utils/Link";

const AboutCompro: React.VFC = () => {
  const contests = comproData;

  return (
    <>
      <Heading as="h3" size="sm" my={2}>
        Competitive Programming
      </Heading>
      <Text>
        {"AtCoder: "}
        <Link
          fontWeight="bold"
          href="https://atcoder.jp/users/arkark"
          isExternal
        >
          <chakra.span color="#0000FF">1900+</chakra.span>
          <chakra.span color="#C0C000"> (highest: 2028) </chakra.span>
        </Link>
      </Text>
      <Text>
        Project Euler{": "}
        <chakra.span fontWeight="bold">Level 6 / Solved 170+</chakra.span>
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
