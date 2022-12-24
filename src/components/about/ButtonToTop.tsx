import { Box, Fade, Icon, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import * as Scroll from "react-scroll";

const ButtonToTop: React.FC = () => {
  const [isBottom, setIsBottom] = useState<boolean>(false);
  const onScroll = () => {
    setIsBottom(
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    );
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const onClick = () => {
    const elm = document.activeElement;
    if (elm instanceof HTMLElement) {
      elm.blur();
    }
  };

  return (
    <Box w="100vw" h="100vh" position="fixed" pointerEvents="none">
      <Fade in={isBottom}>
        <Box
          right={6}
          bottom={6}
          position="fixed"
          pointerEvents={isBottom ? "auto" : "none"}
        >
          <Scroll.Link to="top" smooth={true} duration={250}>
            <IconButton
              aria-label="scroll to Top"
              colorScheme="whiteAlpha"
              color="gray.500"
              isRound
              borderWidth={2}
              borderColor="gray.500"
              icon={<Icon boxSize={4} as={FaArrowUp}></Icon>}
              onClick={onClick}
            ></IconButton>
          </Scroll.Link>
        </Box>
      </Fade>
    </Box>
  );
};

export default ButtonToTop;
