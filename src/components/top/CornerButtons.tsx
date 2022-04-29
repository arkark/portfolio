import { Box, Icon, IconButton, Fade } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaArrowDown, FaCode } from "react-icons/fa";
import * as Scroll from "react-scroll";

import Link from "@/components/utils/Link";

const CornerButtons: React.VFC = () => {
  const [isTop, setIsTop] = useState<boolean>(true);
  const onScroll = () => {
    setIsTop(window.scrollY === 0);
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
    <Box w="100vw" h="100vh" position="absolute" pointerEvents="none">
      <Fade in={isTop}>
        <Box
          left={6}
          bottom={6}
          position="fixed"
          pointerEvents={isTop ? "auto" : "none"}
        >
          <Link href="https://github.com/arkark/portfolio" isExternal>
            <IconButton
              aria-label="link to source code"
              colorScheme="blackAlpha"
              isRound
              borderWidth={2}
              borderColor="gray.500"
              icon={<Icon boxSize={4} as={FaCode}></Icon>}
              onClick={onClick}
            ></IconButton>
          </Link>
        </Box>
        <Box
          right={6}
          bottom={6}
          position="fixed"
          pointerEvents={isTop ? "auto" : "none"}
        >
          <Scroll.Link to="about" smooth={true} duration={250}>
            <IconButton
              aria-label="scroll to About"
              colorScheme="blackAlpha"
              isRound
              borderWidth={2}
              borderColor="gray.500"
              icon={<Icon boxSize={4} as={FaArrowDown}></Icon>}
              onClick={onClick}
            ></IconButton>
          </Scroll.Link>
        </Box>
      </Fade>
    </Box>
  );
};

export default CornerButtons;
