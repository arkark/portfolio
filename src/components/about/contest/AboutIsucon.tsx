import { List, Text, chakra } from "@chakra-ui/react";

import H4 from "@/components/utils/H4";
import ListItemWithIcon from "@/components/utils/ListItemWithIcon";
import Twemoji from "@/components/utils/Twemoji";

const AboutIsucon: React.FC = () => {
  return (
    <>
      <H4>Web Tuning Contests</H4>
      <Text>Team: shallowverse</Text>
      <List>
        <ListItemWithIcon>
          ISUCON 11{": "}
          <chakra.span fontWeight="bold">
            qual 1st
            <Twemoji emoji={"🥇"} size={16}></Twemoji>
          </chakra.span>
          {" / "}
          <chakra.span fontWeight="bold">final 6th</chakra.span>
        </ListItemWithIcon>
        <ListItemWithIcon>
          ISUCON 10{": "}
          <chakra.span fontWeight="bold">
            qual 2nd
            <Twemoji emoji={"🥈"} size={16}></Twemoji>
          </chakra.span>
          {" / "}
          <chakra.span fontWeight="bold">final 9th</chakra.span>
        </ListItemWithIcon>
      </List>
    </>
  );
};

export default AboutIsucon;
