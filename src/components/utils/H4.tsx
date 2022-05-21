import { Heading } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const H4: React.VFC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Heading as="h4" size="sm" my={2}>
      {children}
    </Heading>
  );
};

export default H4;
