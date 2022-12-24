import { Wrap, WrapItem } from "@chakra-ui/react";

import WorkNode from "@/components/about/work/WorkNode";
import workData from "@/components/about/work/data/workData";

const WorkList: React.FC = () => {
  const cardWidth = 220;
  const cardHeight = 270;
  const imageHeight = 140;

  const works = workData;

  return (
    <Wrap spacing={3} justify="center">
      {works.map((work, index) => {
        return (
          <WrapItem key={index}>
            <WorkNode
              work={work}
              cardWidth={cardWidth}
              cardHeight={cardHeight}
              imageHeight={imageHeight}
            ></WorkNode>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};
export default WorkList;
