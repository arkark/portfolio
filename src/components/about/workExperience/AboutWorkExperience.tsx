import { Box, Heading, Icon, List, Stack } from "@chakra-ui/react";
import { FaHashtag } from "react-icons/fa";

import AboutInternship from "@/components/about/workExperience/AboutInternship";
import LabelWithInfo from "@/components/utils/LabelWithInfo";
import ListItemWithIcon from "@/components/utils/ListItemWithIcon";
import formatDate from "@/components/utils/formatDate";

const AboutWorkExperience: React.VFC = () => {
  return (
    <>
      <Heading as="h3" size="md" my={2}>
        <Icon as={FaHashtag} color="gray.600" mr={1}></Icon>
        Work Experience
      </Heading>
      <Stack spacing={4}>
        <Box>
          <Heading as="h4" size="sm" my={2}>
            Working
          </Heading>
          <List>
            <ListItemWithIcon>
              <LabelWithInfo
                label="Yahoo Japan Corporation"
                info={`Data Engineer (${formatDate("2021/04")} - present)`}
              ></LabelWithInfo>
            </ListItemWithIcon>
            <ListItemWithIcon>
              <LabelWithInfo
                label="Ricerca Security, Inc."
                info={`Security Engineer (${formatDate("2021/10")} - present)`}
              ></LabelWithInfo>
            </ListItemWithIcon>
          </List>
        </Box>
        <Box>
          <Heading as="h4" size="sm" my={2}>
            Student Part-Time Jobs
          </Heading>
          <List>
            <ListItemWithIcon>
              <LabelWithInfo
                label="MC Digital, Inc."
                info={`Software Engineer (${formatDate(
                  "2020/04"
                )} - ${formatDate("2020/10")})`}
              ></LabelWithInfo>
            </ListItemWithIcon>
            <ListItemWithIcon>
              <LabelWithInfo
                label="Toyokumo, Inc."
                info={`Software Engineer (${formatDate(
                  "2018/08"
                )} - ${formatDate("2019/09")})`}
              ></LabelWithInfo>
            </ListItemWithIcon>
            <ListItemWithIcon>
              <LabelWithInfo
                label="OCTEC Inc."
                info={`Software Engineer (${formatDate(
                  "2017/11"
                )} - ${formatDate("2018/07")})`}
              ></LabelWithInfo>
            </ListItemWithIcon>
          </List>
        </Box>
        <Box>
          <AboutInternship></AboutInternship>
        </Box>
      </Stack>
    </>
  );
};

export default AboutWorkExperience;
