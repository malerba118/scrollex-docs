import { FC } from "react";
import { chakra, Heading, HStack, Box, Icon, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { RiGithubFill } from "react-icons/ri";

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <HStack
        h="64px"
        borderBottom="1px solid rgba(255,255,255, .1)"
        px={6}
        spacing={12}
        display="flex"
        alignItems="center"
      >
        <Heading color="white" fontSize="2xl" fontFamily="limelight">
          Scrollex
        </Heading>
        <HStack pt={1} spacing={6} fontWeight="bold">
          <Link as={NextLink} href="/" fontSize="md" color="white">
            Guide
          </Link>
          <Link as={NextLink} href="/components" fontSize="md" color="white">
            Components
          </Link>
          <Link as={NextLink} href="/examples" fontSize="md" color="white">
            Examples
          </Link>
        </HStack>
        <Box flex={1} />
        <Link
          color="white"
          isExternal
          href="https://github.com/malerba118/scrollex"
          display="inline-grid"
          placeItems="center"
        >
          <Icon as={RiGithubFill} fontSize="3xl" />
        </Link>
      </HStack>
      {children}
    </>
  );
};

export default Layout;
