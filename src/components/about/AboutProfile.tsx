import { Box, HStack, Heading, Icon, List, chakra } from "@chakra-ui/react";
import {
  FaCode,
  FaGithub,
  FaHashtag,
  FaPenNib,
  FaTwitter,
  FaUser,
  FaUserTag,
} from "react-icons/fa";

import Link from "@/components/utils/Link";
import ListItemWithIcon from "@/components/utils/ListItemWithIcon";

const AboutProfile: React.VFC = () => {
  return (
    <>
      <Heading as="h4" size="md" my={2}>
        <Icon as={FaHashtag} color="gray.600" mr={1}></Icon>
        Profile
      </Heading>
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
        <ListItemWithIcon iconAs={FaGithub}>
          <HStack wrap="wrap" spacing={1}>
            <chakra.span>GitHub:</chakra.span>
            <Link
              fontWeight="bold"
              color="blue.500"
              href="https://github.com/arkark"
              isExternal
            >
              arkark
            </Link>
          </HStack>
        </ListItemWithIcon>
        <ListItemWithIcon iconAs={FaTwitter}>
          <HStack wrap="wrap" spacing={1}>
            <chakra.span>Twitter:</chakra.span>
            <Link
              fontWeight="bold"
              color="blue.500"
              href="https://twitter.com/arkark_"
              isExternal
            >
              @arkark_
            </Link>
          </HStack>
        </ListItemWithIcon>
        <ListItemWithIcon iconAs={FaPenNib}>
          <HStack wrap="wrap" spacing={1}>
            <chakra.span>Blog:</chakra.span>
            <Link
              fontWeight="bold"
              color="blue.500"
              href="https://blog.arkark.dev/"
              isExternal
            >
              XS-Spin Blog
            </Link>
          </HStack>
        </ListItemWithIcon>
        <ListItemWithIcon iconAs={FaCode}>
          <HStack wrap="wrap" spacing={1}>
            <chakra.span>Fav:</chakra.span>
            <chakra.span>D, Rust, and JavaScript</chakra.span>
          </HStack>
        </ListItemWithIcon>
      </List>
      <Box>
        Currently working as a data engineer and a security engineer in Japan.
      </Box>
    </>
  );
};

export default AboutProfile;
