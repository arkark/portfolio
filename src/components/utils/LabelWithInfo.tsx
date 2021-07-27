import { HStack, chakra } from "@chakra-ui/react";

export interface LabelWithInfoProps {
  label: React.ReactNode;
  info: React.ReactNode;
}

const LabelWithInfo: React.VFC<LabelWithInfoProps> = ({ label, info }) => {
  return (
    <HStack wrap="wrap" spacing={2}>
      <chakra.span>{label}</chakra.span>
      <chakra.span fontSize="xs" color="gray.600">
        {info}
      </chakra.span>
    </HStack>
  );
};
export default LabelWithInfo;
