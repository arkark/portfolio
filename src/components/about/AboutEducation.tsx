import { Heading, Icon, List } from "@chakra-ui/react";
import { FaHashtag } from "react-icons/fa";

import LabelWithInfo from "@/components/utils/LabelWithInfo";
import ListItemWithIcon from "@/components/utils/ListItemWithIcon";
import formatDate from "@/components/utils/formatDate";

const AboutEducation: React.VFC = () => {
  return (
    <>
      <Heading as="h3" size="md" my={2}>
        <Icon as={FaHashtag} color="gray.600" mr={1}></Icon>
        Education
      </Heading>
      <List>
        <ListItemWithIcon>
          <LabelWithInfo
            label="Bachelor of Science: Information Science, Tokyo Institute of Technology"
            info={`${formatDate("2015/04")} - ${formatDate("2019/03")}`}
          ></LabelWithInfo>
        </ListItemWithIcon>
        <ListItemWithIcon>
          <LabelWithInfo
            label="Master of Science: Mathematical and Computing Science, Tokyo Institute of Technology"
            info={`${formatDate("2019/04")} - ${formatDate("2021/03")}`}
          ></LabelWithInfo>
        </ListItemWithIcon>
      </List>
    </>
  );
};

export default AboutEducation;
