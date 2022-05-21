import { Heading, Icon } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { FaHashtag } from "react-icons/fa";

const H3: React.VFC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Heading as="h3" size="md" my={2}>
      <Icon as={FaHashtag} color="gray.600" mr={1}></Icon>
      {children}
    </Heading>
  );
};

export default H3;
