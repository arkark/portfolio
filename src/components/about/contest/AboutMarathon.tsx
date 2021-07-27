import { Heading, List } from "@chakra-ui/react";

import ContestListItem from "@/components/about/contest/ContestListItem";
import marathonData from "@/components/about/contest/data/marathonData";

const AboutMarathon: React.VFC = () => {
  const contests = marathonData;

  return (
    <>
      <Heading as="h3" size="sm" my={2}>
        Heuristic Contests
      </Heading>
      <List>
        {contests.map((contest, index) => (
          <ContestListItem key={index} contest={contest}></ContestListItem>
        ))}
      </List>
    </>
  );
};

export default AboutMarathon;
