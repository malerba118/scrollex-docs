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
        px={{ base: 4, md: 6 }}
        spacing={{ base: 6, md: 12 }}
        display="flex"
        alignItems="center"
      >
        <Link as={NextLink} href="/" color="white">
          <Heading
            color="white"
            fontSize={{ base: "lg", md: "2xl" }}
            fontFamily="limelight"
            cursor="pointer"
          >
            Scrollex
          </Heading>
        </Link>
        <HStack
          pt={1}
          spacing={6}
          fontWeight="bold"
          fontSize={{ base: "sm", md: "md" }}
        >
          <Link as={NextLink} href="/" color="white">
            Guide
          </Link>
          <Link as={NextLink} href="/reference" color="white">
            API Reference
          </Link>
          <Link as={NextLink} href="/examples" color="white">
            Examples
          </Link>
        </HStack>
        <Box flex={1} />
        <Link
          color="white"
          isExternal
          href="https://github.com/malerba118/scrollex"
          display={{ base: "none", md: "inline-grid" }}
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
