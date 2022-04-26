import { FC, useState } from "react";
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  Navigator,
  SandpackThemeProp,
  useSandpackTheme,
  getThemeStyleSheet,
  DeepPartial,
  SandpackPartialTheme,
  SandpackThemeProvider,
} from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";
import { Box, Stack, IconButton, useBreakpoint } from "@chakra-ui/react";
import * as files from "./files";
import ScrollContainer from "./ScrollContainer";
import useCustomTheme from "../hooks/useCustomTheme";
import { RiCloseFill, RiCodeFill } from "react-icons/ri";

interface ProjectProps {
  theme?: SandpackThemeProp;
}

const themeOverrides: SandpackPartialTheme = {
  typography: {
    monoFont: "Ubuntu Mono",
    bodyFont: "Ubuntu Mono",
    fontSize: "1rem",
  },
  palette: {
    defaultBackground: "#252325",
    activeText: "var(--chakra-colors-pink-300)",
    inactiveText: "var(--chakra-colors-whiteAlpha-200)",
    defaultText: "var(--chakra-colors-whiteAlpha-500)",
    accent: "var(--chakra-colors-pink-300)",
  },
  syntax: {
    tag: "var(--chakra-colors-pink-300)",
    keyword: "var(--chakra-colors-purple-300)",
    property: "var(--chakra-colors-purple-200)",
    string: "var(--chakra-colors-orange-200)",
    plain: "var(--chakra-colors-pink-100)",
  },
};

const InnerProject: FC = ({ children }) => {
  const { theme } = useCustomTheme({
    ...themeOverrides,
  });
  const breakpoint = useBreakpoint();
  const [showCode, setShowCode] = useState(false);

  const isSmallScreen = ["base", "xs", "sm"].includes(breakpoint!);

  return (
    <SandpackProvider customSetup={{ files: files.base }} template="react">
      <ScrollContainer
        h="calc(100vh - 64px)"
        w={{ base: "100vw", md: "50vw" }}
        fontFamily="poppins"
      >
        {children}
      </ScrollContainer>
      <Box
        pos="fixed"
        top="64px"
        right={0}
        bottom={0}
        w={{ base: "100%", md: "50%" }}
        display={isSmallScreen && !showCode ? "none" : "block"}
        overscrollBehavior="contain"
      >
        <SandpackLayout
          theme={theme}
          style={{
            borderTop: "none",
            borderRadius: 0,
            backgroundColor: "#1f1d1f",
          }}
        >
          <Stack spacing={0} h="calc(100vh - 64px)" w="100%">
            <SandpackCodeEditor
              showLineNumbers
              customStyle={{
                height: "50%",
              }}
            />
            <SandpackPreview
              customStyle={{
                height: "50%",
              }}
            />
          </Stack>
        </SandpackLayout>
      </Box>
      {isSmallScreen && !showCode && (
        <IconButton
          pos="fixed"
          bottom={4}
          right={4}
          zIndex={1}
          colorScheme="gray"
          color="white"
          aria-label="Show Code"
          icon={<RiCodeFill />}
          onClick={() => setShowCode(true)}
          size="md"
        />
      )}
      {isSmallScreen && showCode && (
        <IconButton
          pos="fixed"
          bottom={4}
          right={4}
          zIndex={1}
          colorScheme="gray"
          color="white"
          aria-label="Show Code"
          icon={<RiCloseFill />}
          onClick={() => setShowCode(false)}
          size="md"
        />
      )}
    </SandpackProvider>
  );
};

const Project: FC<ProjectProps> = ({ theme, children }) => {
  return (
    <SandpackThemeProvider theme={theme}>
      <InnerProject>{children}</InnerProject>
    </SandpackThemeProvider>
  );
};

export default Project;
