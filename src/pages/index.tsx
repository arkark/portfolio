import { Box, Container, Heading, Icon, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { FaHashtag } from "react-icons/fa";
import * as Scroll from "react-scroll";

import Scroller from "@/components/Scroller";
import AboutEvent from "@/components/about/AboutActivity";
import AboutArticle from "@/components/about/AboutArticle";
import AboutEducation from "@/components/about/AboutEducation";
import AboutInterest from "@/components/about/AboutInterest";
import AboutProfile from "@/components/about/AboutProfile";
import AboutPublication from "@/components/about/AboutPublication";
import AboutContest from "@/components/about/contest/AboutContest";
import AboutWorkExperience from "@/components/about/workExperience/AboutWorkExperience";
import Top from "@/components/top/Top";
import WorkList from "@/components/work/WorkList";

const Home: NextPage = () => {
  const components = [
    AboutProfile,
    AboutInterest,
    AboutContest,
    AboutEvent,
    AboutEducation,
    AboutWorkExperience,
    AboutPublication,
    AboutArticle,
  ];
  return (
    <>
      <Head>
        <title>{"Ark's page"}</title>
        {/* TODO: header */}
        <meta name="description" content="Ark's portfolio website :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Scroller></Scroller>
      <Scroll.Element name="top">
        <Top></Top>
      </Scroll.Element>
      <Scroll.Element name="about">
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
      </Scroll.Element>
    </>
  );
};

export default Home;
