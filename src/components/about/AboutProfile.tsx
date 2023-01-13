import { Box, HStack, List, chakra, Text } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

import H3 from "@/components/utils/H3";
import ListItemWithIcon from "@/components/utils/ListItemWithIcon";
import Twemoji from "@/components/utils/Twemoji";

const AboutProfile: React.FC = () => {
  return (
    <>
      <H3>Profile</H3>
      <Box>
        <Text fontWeight="bold">
          Hi there <Twemoji emoji="👋" size={16}></Twemoji>
        </Text>
      </Box>
      <List>
        <ListItemWithIcon iconAs={FaUser}>
          <HStack wrap="wrap" spacing={1}>
            <chakra.span>Name:</chakra.span>
            <chakra.span>Takeshi Kaneko</chakra.span>
          </HStack>
        </ListItemWithIcon>
      </List>
      <Box>
        <Text>Currently working as a web security engineer in Japan.</Text>
      </Box>
    </>
  );
};

export default AboutProfile;
