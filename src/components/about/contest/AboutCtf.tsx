import { List, ListItem, Text } from "@chakra-ui/react";

import ContestListItem from "@/components/about/contest/ContestListItem";
import ctfData from "@/components/about/data/ctfData";
import H4 from "@/components/utils/H4";
import Link from "@/components/utils/Link";

const AboutCtf: React.FC = () => {
  return (
    <>
      <H4>Capture The Flag</H4>
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
