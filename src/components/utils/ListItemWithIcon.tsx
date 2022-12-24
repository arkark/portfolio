/*
  <ListItemWithIcon> supports multiple lines.

  cf. https://chakra-ui.com/docs/data-display/list#unstyled-list-with-icon
  <ListIcon> in Chakra UI does not support multiple lines.
*/
import {
  ListIcon,
  ListItem,
  ListItemProps,
  Stack,
  chakra,
  forwardRef,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaAngleRight } from "react-icons/fa";

interface ListItemWithIconProps extends ListItemProps {
  iconAs?: IconType;
  iconColor?: string;
}

const ListItemWithIcon: React.FC<ListItemWithIconProps> = forwardRef<
  ListItemWithIconProps,
  "li"
>((props, ref) => {
  const { iconAs = FaAngleRight, iconColor = "gray.600", ...restProps } = props;

  return (
    <ListItem ref={ref} {...restProps}>
      <Stack direction={"row"} spacing={2}>
        <chakra.span>
          <ListIcon
            as={iconAs}
            color={iconColor}
            m={0}
            verticalAlign="middle"
          />
        </chakra.span>
        <chakra.span>{props.children}</chakra.span>
      </Stack>
    </ListItem>
  );
});

export default ListItemWithIcon;
