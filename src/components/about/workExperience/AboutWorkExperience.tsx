import { Box, List, Stack } from "@chakra-ui/react";

import AboutInternship from "@/components/about/workExperience/AboutInternship";
import H3 from "@/components/utils/H3";
import H4 from "@/components/utils/H4";
import LabelWithInfo from "@/components/utils/LabelWithInfo";
import ListItemWithIcon from "@/components/utils/ListItemWithIcon";
import formatDate from "@/components/utils/formatDate";

const AboutWorkExperience: React.FC = () => {
  return (
    <>
      <H3>Work Experience</H3>
      <Stack spacing={4}>
        <Box>
          <H4>Working</H4>
          <List>
            <ListItemWithIcon>
              <LabelWithInfo
                label="GMO Cybersecurity by Ierae, Inc."
                info={`Security Engineer (${formatDate("2022/11")} - present)`}
              ></LabelWithInfo>
            </ListItemWithIcon>
            <ListItemWithIcon>
              <LabelWithInfo
                label="Ricerca Security, Inc."
                info={`Security Engineer (${formatDate(
                  "2021/10"
                )} - ${formatDate("2022/9")})`}
              ></LabelWithInfo>
            </ListItemWithIcon>
            <ListItemWithIcon>
              <LabelWithInfo
                label="Yahoo Japan Corporation"
                info={`Data Platform Engineer (${formatDate(
                  "2021/04"
                )} - ${formatDate("2022/10")})`}
              ></LabelWithInfo>
            </ListItemWithIcon>
          </List>
        </Box>
        <Box>
          <H4>Student Part-Time Jobs</H4>
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
