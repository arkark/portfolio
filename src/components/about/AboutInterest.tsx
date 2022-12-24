import { List } from "@chakra-ui/react";

import H3 from "@/components/utils/H3";
import ListItemWithIcon from "@/components/utils/ListItemWithIcon";

const AboutInterest: React.FC = () => {
  return (
    <>
      <H3>Interests</H3>
      <List>
        <ListItemWithIcon>Web Security / Web Exploitation</ListItemWithIcon>
        <ListItemWithIcon>
          Algorithms / Data Structures / Distributed Systems
        </ListItemWithIcon>
        <ListItemWithIcon>Creative Coding / Generative Design</ListItemWithIcon>
        <ListItemWithIcon>
          Mathematics / Algebra for Computer Science
        </ListItemWithIcon>
      </List>
    </>
  );
};

export default AboutInterest;
