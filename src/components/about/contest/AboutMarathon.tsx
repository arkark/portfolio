import { List } from "@chakra-ui/react";

import ContestListItem from "@/components/about/contest/ContestListItem";
import marathonData from "@/components/about/contest/data/marathonData";
import H4 from "@/components/utils/H4";

const AboutMarathon: React.VFC = () => {
  const contests = marathonData;

  return (
    <>
      <H4>Heuristic Contests</H4>
      <List>
        {contests.map((contest, index) => (
          <ContestListItem key={index} contest={contest}></ContestListItem>
        ))}
      </List>
    </>
  );
};

export default AboutMarathon;
