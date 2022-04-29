import {
  Box,
  HStack,
  Heading,
  Icon,
  List,
  chakra,
  Text,
} from "@chakra-ui/react";
import { FaHashtag, FaUser, FaUserTag } from "react-icons/fa";

import Twemoji from "../utils/Twemoji";

import ListItemWithIcon from "@/components/utils/ListItemWithIcon";

const AboutProfile: React.VFC = () => {
  return (
    <>
      <Heading as="h4" size="md" my={2}>
        <Icon as={FaHashtag} color="gray.600" mr={1}></Icon>
        Profile
      </Heading>
      <Box>
        <Text fontWeight="bold">
          Hi there <Twemoji emoji="👋" size={16}></Twemoji>
        </Text>
      </Box>
      <List>
        <ListItemWithIcon iconAs={FaUser}>
          <HStack wrap="wrap" spacing={1}>
            <chakra.span>Name:</chakra.span>
            <chakra.span>Takeshi Kaneko</chakra.span>
          </HStack>
        </ListItemWithIcon>
        <ListItemWithIcon iconAs={FaUserTag}>
          <HStack wrap="wrap" spacing={1}>
            <chakra.span>HN:</chakra.span>
            <chakra.span>Ark / アーク</chakra.span>
          </HStack>
        </ListItemWithIcon>
      </List>
      <Box>
        <Text>
          Currently working as a data engineer and a security engineer in Japan.
        </Text>
      </Box>
    </>
  );
};

export default AboutProfile;
