import { Heading, Icon, List } from "@chakra-ui/react";
import { FaHashtag } from "react-icons/fa";

import ListItemWithIcon from "@/components/utils/ListItemWithIcon";

const AboutInterest: React.VFC = () => {
  return (
    <>
      <Heading as="h3" size="md" my={2}>
        <Icon as={FaHashtag} color="gray.600" mr={1}></Icon>
        Interests
      </Heading>
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
