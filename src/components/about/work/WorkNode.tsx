import {
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Spacer,
  Stack,
  Tag,
  TagLabel,
  Text,
  chakra,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaAngleRight, FaExternalLinkAlt } from "react-icons/fa";

import type WorkType from "@/components/about/work/data/WorkType";
import Link from "@/components/utils/Link";
import formatDate from "@/components/utils/formatDate";

export interface WorkNodeProps {
  work: WorkType;
  cardWidth: number;
  cardHeight: number;
  imageHeight: number;
}

const WorkNode: React.VFC<WorkNodeProps> = ({
  work,
  cardWidth,
  cardHeight,
  imageHeight,
}) => {
  return (
    <Box
      w={cardWidth}
      h={cardHeight}
      borderWidth={1}
      borderRadius="lg"
      overflow="hidden"
    >
      <Flex h={cardHeight} direction="column">
        <Box w={cardWidth} h={imageHeight}>
          <Image
            src={work.imgSrc}
            alt={work.title}
            width={cardWidth}
            height={imageHeight}
            layout="intrinsic"
            quality={100}
          ></Image>
        </Box>
        <Box px={3} pt={2}>
          <Stack spacing={2}>
            <Heading as="h3" size="sm" maxW="85%">
              {work.title}
            </Heading>
            <Text fontSize="xs">
              <Icon as={FaAngleRight} mr={1} verticalAlign="middle"></Icon>
              <chakra.span>{work.description}</chakra.span>
            </Text>
          </Stack>
        </Box>
        <Spacer></Spacer>
        <Flex direction="row" px={3} pb={3}>
          <Tag size="sm" variant="subtle">
            <TagLabel>{work.genre}</TagLabel>
          </Tag>
          <Spacer></Spacer>
          <chakra.span fontSize="xs" color="gray.600">
            {formatDate(work.date)}
          </chakra.span>
        </Flex>
        <Box position="absolute" w={cardWidth} h={imageHeight}>
          <Link
            href={work.url}
            isExternal
            right={3}
            bottom={-(3 + 1)}
            position="absolute"
          >
            <IconButton
              aria-label="external link"
              size="sm"
              colorScheme="blue"
              isRound
              borderWidth={2}
              borderColor="white"
              icon={<Icon boxSize={3} as={FaExternalLinkAlt}></Icon>}
            ></IconButton>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default WorkNode;
