import { List } from "@chakra-ui/react";

import cveData from "@/components/about/data/cveData";
import H3 from "@/components/utils/H3";
import LabelWithInfo from "@/components/utils/LabelWithInfo";
import ListItemWithIcon from "@/components/utils/ListItemWithIcon";

const AboutCsv: React.FC = () => {
  return (
    <>
      <H3>CVE</H3>
      <List>
        {cveData.map((cve, index) => (
          <ListItemWithIcon key={index}>
            <LabelWithInfo label={cve.label} info={cve.info}></LabelWithInfo>
          </ListItemWithIcon>
        ))}
      </List>
    </>
  );
};

export default AboutCsv;
