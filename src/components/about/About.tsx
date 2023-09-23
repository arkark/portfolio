import { Box, Container, Stack } from "@chakra-ui/react";

import AboutAccount from "@/components/about/AboutAccount";
import AboutActivity from "@/components/about/AboutActivity";
import AboutCve from "@/components/about/AboutCve";
import AboutEducation from "@/components/about/AboutEducation";
import AboutInterest from "@/components/about/AboutInterest";
import AboutProfile from "@/components/about/AboutProfile";
import ButtonToTop from "@/components/about/ButtonToTop";
import AboutContest from "@/components/about/contest/AboutContest";
import AboutWorkExperience from "@/components/about/workExperience/AboutWorkExperience";

const About: React.FC = () => {
  const components = [
    AboutProfile,
    AboutAccount,
    AboutInterest,
    AboutActivity,
    AboutCve,
    AboutContest,
    AboutEducation,
    AboutWorkExperience,
  ];
  return (
    <>
      <Container maxW="3xl" centerContent mt={8} mb={16}>
        <Box w="100%">
          <Stack spacing={8}>
            {components.map((Component, index) => (
              <Box key={index}>
                <Component></Component>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
      <ButtonToTop></ButtonToTop>
    </>
  );
};

export default About;
