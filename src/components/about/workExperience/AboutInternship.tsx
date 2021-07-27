import { Heading, List, ListItem, Text } from "@chakra-ui/react";

import LabelWithInfo from "@/components/utils/LabelWithInfo";
import ListItemWithIcon from "@/components/utils/ListItemWithIcon";

const AboutInternship: React.VFC = () => {
  const data = [
    {
      year: "2019",
      jobs: [
        {
          label: "VOYAGE GROUP, Inc.",
          info: "Sunrise 大規模サービス構築プログラム (3 days)",
        },
        {
          label: "Wantedly, Inc.",
          info: "Wantedly Summer Intern, Infrastructure (3 weeks)",
        },
        {
          label: "mixi, Inc.",
          info: "2Days Challenge (2 days)",
        },
        {
          label: "Cookpad Inc.",
          info: "Cookpad Summer Internship 2019 10 Day Tech (2 weeks)",
        },
        {
          label: "GREE, Inc.",
          info: "GREE Camp (2 days)",
        },
        {
          label: "Cookpad Inc.",
          info: "Cookpad Spring 1day Internship 2019 コンテナコース (1 day)",
        },
      ],
    },
    {
      year: "2017",
      jobs: [
        {
          label: "HAL Laboratory, Inc.",
          info: "INTERNSHIP 2017 PROGRAMMER COURSE (1 day)",
        },
        {
          label: "COLOPL, Inc.",
          info: "MASH UP エンターテインメントを追求する合宿型インターンシップ (3 days)",
        },
        {
          label: "mixi, Inc.",
          info: "第6回 git challenge (1 day)",
        },
        {
          label: "DeNA Co., Ltd.",
          info: "SUMMER INTERNSHIP ゲームエンジニアリングコース (3 days)",
        },
      ],
    },
  ];
  return (
    <>
      <Heading as="h4" size="sm" my={2}>
        Short Internships
      </Heading>
      <List>
        {data.map(({ year, jobs }, index) => (
          <ListItem key={index}>
            <Text>{year}</Text>
            <List>
              {jobs.map((job, index) => (
                <ListItemWithIcon key={index}>
                  <LabelWithInfo
                    label={job.label}
                    info={job.info}
                  ></LabelWithInfo>
                </ListItemWithIcon>
              ))}
            </List>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default AboutInternship;
