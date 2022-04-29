import { Box, Heading, Icon, Container, Stack } from "@chakra-ui/react";
import { FaHashtag } from "react-icons/fa";

import AboutAccount from "@/components/about/AboutAccount";
import AboutEvent from "@/components/about/AboutActivity";
import AboutArticle from "@/components/about/AboutArticle";
import AboutEducation from "@/components/about/AboutEducation";
import AboutInterest from "@/components/about/AboutInterest";
import AboutProfile from "@/components/about/AboutProfile";
import AboutPublication from "@/components/about/AboutPublication";
import AboutContest from "@/components/about/contest/AboutContest";
import WorkList from "@/components/about/work/WorkList";
import AboutWorkExperience from "@/components/about/workExperience/AboutWorkExperience";

const About: React.VFC = () => {
  const components = [
    AboutProfile,
    AboutAccount,
    AboutInterest,
    AboutContest,
    AboutEvent,
    AboutEducation,
    AboutWorkExperience,
    AboutPublication,
    AboutArticle,
  ];
  return (
    <Container maxW="3xl" centerContent mt={5} mb={20}>
      <Box w="100%">
        <Stack spacing={6}>
          {components.map((Component, index) => (
            <Box key={index}>
              <Component></Component>
            </Box>
          ))}
          <Box>
            <Heading as="h3" size="md" my={2}>
              <Icon as={FaHashtag} color="gray.600" mr={1}></Icon>
              Works
            </Heading>
            <WorkList></WorkList>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default About;
