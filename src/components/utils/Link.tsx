import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import NextLink from "next/link";

export interface LinkProps extends ChakraLinkProps {
  href: string;
}

const Link: React.VFC<LinkProps> = (props) => {
  const { href, ...restProps } = props;
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...restProps}></ChakraLink>
    </NextLink>
  );
};

export default Link;
