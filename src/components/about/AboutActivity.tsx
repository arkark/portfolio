import { HStack, List, chakra } from "@chakra-ui/react";

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
            <chakra.span>SECCON CTF 2023 Finals</chakra.span>
          </HStack>
        </ListItemWithIcon>
        <ListItemWithIcon>
          <Link
            href="https://github.com/arkark/my-ctf-challenges#seccon-ctf-2023-quals"
            isExternal
          >
            SECCON CTF 2023 Quals
          </Link>
        </ListItemWithIcon>
        <ListItemWithIcon>
          <Link
            href="https://github.com/arkark/my-ctf-challenges#seccon-ctf-2022-finals"
            isExternal
          >
            SECCON CTF 2022 Finals
          </Link>
        </ListItemWithIcon>
        <ListItemWithIcon>
          <Link
            href="https://github.com/arkark/my-ctf-challenges#seccon-ctf-2022-quals"
            isExternal
          >
            SECCON CTF 2022 Quals
          </Link>
        </ListItemWithIcon>
        <ListItemWithIcon>
          <Link
            href="https://github.com/arkark/my-ctf-challenges#seccon-ctf-2021"
            isExternal
          >
            SECCON CTF 2021
          </Link>
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
