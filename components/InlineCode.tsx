import { FC } from "react";
import { Code, CodeProps } from "@chakra-ui/react";

interface InlineCodeProps extends CodeProps {}

const InlineCode: FC<InlineCodeProps> = ({ ...props }) => {
  return (
    <Code
      verticalAlign="middle"
      bg="whiteAlpha.100"
      color="pink.200"
      h="30px"
      px={2}
      mx={0.5}
      rounded="md"
      display="inline-flex"
      alignItems="center"
      {...props}
    />
  );
};

export default InlineCode;
