import { Box, Heading, List, Stack, chakra } from "@chakra-ui/react";

import H3 from "@/components/utils/H3";
import ListItemWithIcon from "@/components/utils/ListItemWithIcon";

const AboutPublication: React.VFC = () => {
  return (
    <>
      <H3>Publication</H3>
      <Stack spacing={4}>
        <Box>
          <Heading as="h4" size="sm" my={2}>
            Journal Papers
          </Heading>
          <List>
            <ListItemWithIcon>
              <chakra.span as="u">Takeshi Kaneko</chakra.span>, Ryohei Banno,
              Kazuyuki Shudo, Kota Abe, Yuuichi Teranishi: &ldquo;Detouring Skip
              Graph: Efficient Routing via Detour Routes on Skip Graph
              Topology,&rdquo; IEEE Open Journal of the Communications Society
              (OJ-COMS), Vol.1, pp. 1658-1673, October 2020.
            </ListItemWithIcon>
          </List>
        </Box>
        <Box>
          <Heading as="h4" size="sm" my={2}>
            International Conferences
          </Heading>
          <List>
            <ListItemWithIcon>
              <chakra.span as="u">Takeshi Kaneko</chakra.span>, Kazuyuki Shudo:
              &ldquo;Broadcast with Tree Selection on An Overlay Network,&rdquo;
              Proc. 36th International Conference on Information Networking
              (ICOIN), January 2022.
            </ListItemWithIcon>
            <ListItemWithIcon>
              Yuya Miki, <chakra.span as="u">Takeshi Kaneko</chakra.span>,
              Ryohei Banno, Kazuyuki Shudo: &ldquo;An Efficient Range Search
              Method Utilizing Detour Routes in Skip Graph,&rdquo; Proc. 19th
              IEEE Consumer Communications &amp; Networking Conference (CCNC),
              January 2022.
            </ListItemWithIcon>
            <ListItemWithIcon>
              <chakra.span as="u">Takeshi Kaneko</chakra.span>, Ryohei Banno,
              Kazuyuki Shudo, Yusuke Aoki, Kota Abe, Yuuichi Teranishi:
              &ldquo;Detouring Skip Graph: A Structured Overlay Utilizing Detour
              Routes,&rdquo; Proc. 17th IEEE Consumer Communications &
              Networking Conference (CCNC), January 2020.
            </ListItemWithIcon>
            <ListItemWithIcon>
              Yusuke Aoki, Kai Otsuki,{" "}
              <chakra.span as="u">Takeshi Kaneko</chakra.span>, Ryohei Banno,
              Kazuyuki Shudo: &ldquo;SimBlock: A Blockchain Network
              Simulator,&rdquo; Proc. 2nd Workshop on Cryptocurrencies and
              Blockchains for Distributed Systems (CryBlock, in conjunction with
              IEEE INFOCOM 2019), April 2019.
            </ListItemWithIcon>
          </List>
        </Box>
      </Stack>
    </>
  );
};

export default AboutPublication;
