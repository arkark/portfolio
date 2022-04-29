import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaHeart, FaPenNib, FaTwitter } from "react-icons/fa";

import CornerButtons from "./CornerButtons";

import BioIcon from "@/components/top/BioIcon";
import Link from "@/components/utils/Link";

const Top: React.VFC = () => {
  const bioIconSize = 128;
  const linkIconSize = 8;

  return (
    <Box color="white">
      <BioIcon
        w="100vw"
        h="100vh"
        contentW={bioIconSize}
        contentH={bioIconSize}
        position="absolute"
      ></BioIcon>
      <CornerButtons></CornerButtons>
      <Flex
        w="100vw"
        h="50vh"
        direction="column"
        align="center"
        top={0}
        left={0}
      >
        <Spacer></Spacer>
        <Heading size="lg" mb={0}>
          {"Ark's page"}
        </Heading>
        <Text mb={1}>
          I <Icon as={FaHeart} boxSize={3} mx={0.5}></Icon> creating something!
        </Text>
        <Divider w={420} mb={4}></Divider>
        <Box h={`${(bioIconSize / 2) | 0}px`}></Box>
      </Flex>
      <Flex
        w="100vw"
        h="50vh"
        direction="column"
        align="center"
        top={0}
        left={0}
      >
        <Box h={`${(bioIconSize / 2) | 0}px`}></Box>
        <Text fontSize="sm" fontWeight="bold" mb={3}>
          Mathematics / Computer Science / Programming
        </Text>
        <HStack wrap="wrap" spacing={5}>
          <Link href="https://github.com/arkark" isExternal>
            <Icon as={FaGithub} boxSize={linkIconSize}></Icon>
          </Link>
          <Link href="https://twitter.com/arkark_" isExternal>
            <Icon as={FaTwitter} boxSize={linkIconSize}></Icon>
          </Link>
          <Link href="https://blog.arkark.dev/" isExternal>
            <Icon as={FaPenNib} boxSize={linkIconSize}></Icon>
          </Link>
        </HStack>
        <Spacer></Spacer>
      </Flex>
    </Box>
  );
};

export default Top;
