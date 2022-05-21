import { List } from "@chakra-ui/react";

import H3 from "@/components/utils/H3";
import ListItemWithIcon from "@/components/utils/ListItemWithIcon";

const AboutInterest: React.VFC = () => {
  return (
    <>
      <H3>Interests</H3>
      <List>
        <ListItemWithIcon>Algorithms / Data Structures</ListItemWithIcon>
        <ListItemWithIcon>Distributed Systems</ListItemWithIcon>
        <ListItemWithIcon>Web Security / Web Exploitation</ListItemWithIcon>
        <ListItemWithIcon>Creative Coding / Generative Design</ListItemWithIcon>
        <ListItemWithIcon>Algebra for Computer Science</ListItemWithIcon>
      </List>
    </>
  );
};

export default AboutInterest;
