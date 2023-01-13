import { HStack, Icon, List, chakra } from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa";

import H3 from "@/components/utils/H3";
import Link from "@/components/utils/Link";
import ListItemWithIcon from "@/components/utils/ListItemWithIcon";

const AboutActivity: React.FC = () => {
  return (
    <>
      <H3>Activities</H3>
      <List>
        <ListItemWithIcon>
          <HStack wrap="wrap" spacing={1}>
            <span>SECCON CTF 2022 Finals</span>
          </HStack>
        </ListItemWithIcon>
        <ListItemWithIcon>
          <HStack wrap="wrap" spacing={1}>
            <Link
              href="https://github.com/SECCON/SECCON2022_online_CTF"
              isExternal
            >
              SECCON CTF 2022 Quals
            </Link>
            <Icon as={FaAngleRight}></Icon>
            <Link
              href="https://blog.arkark.dev/2022/11/18/seccon-en/"
              fontWeight="bold"
              color="blue.500"
              isExternal
            >
              author writeup
            </Link>
          </HStack>
        </ListItemWithIcon>
        <ListItemWithIcon>
          <HStack wrap="wrap" spacing={1}>
            <Link
              href="https://github.com/SECCON/SECCON2021_online_CTF"
              isExternal
            >
              SECCON CTF 2021
            </Link>
            <Icon as={FaAngleRight}></Icon>
            <Link
              href="https://blog.arkark.dev/2021/12/22/seccon/"
              fontWeight="bold"
              color="blue.500"
              isExternal
            >
              author writeup
            </Link>
          </HStack>
        </ListItemWithIcon>
        <ListItemWithIcon>
          <Link href="https://atcoder.jp/contests/ttpc2019" isExternal>
            東京工業大学プログラミングコンテスト2019
          </Link>
        </ListItemWithIcon>
        <ListItemWithIcon>
          第4回ゲーム制作者交流イベント
          <Link href="https://game3.trap.jp/" isExternal>
            GAME<chakra.sup>3</chakra.sup>
          </Link>
        </ListItemWithIcon>
        <ListItemWithIcon>
          第3回ゲーム制作者交流イベント
          <Link href="https://game3.trap.jp/" isExternal>
            GAME<chakra.sup>3</chakra.sup>
          </Link>
        </ListItemWithIcon>
      </List>
    </>
  );
};

export default AboutActivity;
