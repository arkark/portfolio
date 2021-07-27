import { Box, Heading, Icon, Stack } from "@chakra-ui/react";
import { FaHashtag } from "react-icons/fa";

import AboutCompro from "@/components/about/contest/AboutCompro";
import AboutCtf from "@/components/about/contest/AboutCtf";
import AboutIsucon from "@/components/about/contest/AboutIsucon";
import AboutMarathon from "@/components/about/contest/AboutMarathon";

const AboutContest: React.VFC = () => {
  const components = [AboutCtf, AboutIsucon, AboutCompro, AboutMarathon];
  return (
    <>
      <Heading as="h3" size="md" my={2}>
        <Icon as={FaHashtag} color="gray.600" mr={1}></Icon>
        Contests
      </Heading>
      <Stack spacing={4}>
        {components.map((Component, index) => (
          <Box key={index}>
            <Component></Component>
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default AboutContest;
