import { HStack, Heading, Icon, List, chakra } from "@chakra-ui/react";
import {
  FaDotCircle,
  FaGithub,
  FaHashtag,
  FaLinkedin,
  FaPenNib,
  FaTwitter,
} from "react-icons/fa";

import Link from "@/components/utils/Link";
import ListItemWithIcon from "@/components/utils/ListItemWithIcon";

const AboutAccount: React.VFC = () => {
  return (
    <>
      <Heading as="h4" size="md" my={2}>
        <Icon as={FaHashtag} color="gray.600" mr={1}></Icon>
        Accounts
      </Heading>
      <List>
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
        <ListItemWithIcon iconAs={FaLinkedin}>
          <HStack wrap="wrap" spacing={1}>
            <chakra.span>LinkedIn:</chakra.span>
            <Link
              fontWeight="bold"
              color="blue.500"
              href="https://www.linkedin.com/in/4rk"
              isExternal
            >
              link
            </Link>
          </HStack>
        </ListItemWithIcon>
        <ListItemWithIcon iconAs={FaDotCircle}>
          <HStack wrap="wrap" spacing={1}>
            <chakra.span>Wantedly:</chakra.span>
            <Link
              fontWeight="bold"
              color="blue.500"
              href="https://www.wantedly.com/id/arkark"
              isExternal
            >
              link
            </Link>
          </HStack>
        </ListItemWithIcon>
      </List>
    </>
  );
};

export default AboutAccount;
