import { Heading, List, ListItem, Text } from "@chakra-ui/react";

import ContestListItem from "@/components/about/contest/ContestListItem";
import ctfData from "@/components/about/contest/data/ctfData";
import Link from "@/components/utils/Link";

const AboutCtf: React.VFC = () => {
  return (
    <>
      <Heading as="h4" size="sm" my={2}>
        Capture The Flag
      </Heading>
      <Text>
        {"Team: "}
        <Link
          fontWeight="bold"
          color="blue.500"
          href="https://ctftime.org/team/80092"
          isExternal
        >
          ./Vespiary
        </Link>
      </Text>
      <List>
        {ctfData.map(({ year, contests }, index) => (
          <ListItem key={index}>
            <Text>{year}</Text>
            <List>
              {contests.map((contest, index) => (
                <ContestListItem
                  key={index}
                  contest={contest}
                ></ContestListItem>
              ))}
            </List>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default AboutCtf;
