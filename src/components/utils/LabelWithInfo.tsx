import { HStack, chakra } from "@chakra-ui/react";

import Link from "@/components/utils/Link";

export interface LabelWithInfoProps {
  label: React.ReactNode;
  info: React.ReactNode;
  link?: string;
}

const LabelWithInfo: React.FC<LabelWithInfoProps> = ({ label, info, link }) => {
  return (
    <HStack wrap="wrap" spacing={2}>
      {link ? (
        <Link href={link} isExternal>
          {label}
        </Link>
      ) : (
        <chakra.span>{label}</chakra.span>
      )}
      <chakra.span fontSize="xs" color="gray.600">
        {info}
      </chakra.span>
    </HStack>
  );
};
export default LabelWithInfo;
