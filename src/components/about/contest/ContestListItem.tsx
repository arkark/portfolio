import { chakra } from "@chakra-ui/react";

import type ContestType from "@/components/about/contest/data/ContestType";
import ListItemWithIcon from "@/components/utils/ListItemWithIcon";
import Twemoji from "@/components/utils/Twemoji";

export interface ContestListItemProps {
  contest: ContestType;
}

const ContestListItem: React.FC<ContestListItemProps> = ({ contest }) => {
  return (
    <ListItemWithIcon>
      {contest.label}
      {": "}
      <chakra.span fontWeight="bold">
        {contest.place}{" "}
        {contest.emoji && <Twemoji emoji={contest.emoji} size={16}></Twemoji>}
      </chakra.span>
      {contest.team && ` (Team: ${contest.team})`}
    </ListItemWithIcon>
  );
};

export default ContestListItem;
