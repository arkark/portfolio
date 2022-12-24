import { Box, Stack } from "@chakra-ui/react";

import AboutCompro from "@/components/about/contest/AboutCompro";
import AboutCtf from "@/components/about/contest/AboutCtf";
import AboutIsucon from "@/components/about/contest/AboutIsucon";
import AboutMarathon from "@/components/about/contest/AboutMarathon";
import H3 from "@/components/utils/H3";

const AboutContest: React.FC = () => {
  const components = [AboutCtf, AboutIsucon, AboutCompro, AboutMarathon];
  return (
    <>
      <H3>Contests</H3>
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
