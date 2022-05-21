import { List } from "@chakra-ui/react";

import H3 from "@/components/utils/H3";
import LabelWithInfo from "@/components/utils/LabelWithInfo";
import ListItemWithIcon from "@/components/utils/ListItemWithIcon";
import formatDate from "@/components/utils/formatDate";

const AboutEducation: React.VFC = () => {
  return (
    <>
      <H3>Education</H3>
      <List>
        <ListItemWithIcon>
          <LabelWithInfo
            label="Master of Science, Dept. of Mathematical and Computing Science, Graduate School of Computing, Tokyo Institute of Technology"
            info={`${formatDate("2019/04")} - ${formatDate("2021/03")}`}
          ></LabelWithInfo>
        </ListItemWithIcon>
        <ListItemWithIcon>
          <LabelWithInfo
            label="Bachelor of Science, Dept. of Information Science, School of Science, Tokyo Institute of Technology"
            info={`${formatDate("2015/04")} - ${formatDate("2019/03")}`}
          ></LabelWithInfo>
        </ListItemWithIcon>
      </List>
    </>
  );
};

export default AboutEducation;
