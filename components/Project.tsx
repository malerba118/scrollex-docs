import { FC } from "react";
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
} from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";
import { Box, Stack } from "@chakra-ui/react";
import * as files from "./files";
import ScrollContainer from "./ScrollContainer";
import useCustomTheme from "../hooks/useCustomTheme";

interface ProjectProps {
  theme?: SandpackThemeProp;
}

const themeOverrides: SandpackPartialTheme = {
  typography: {
    monoFont: "Ubuntu Mono",
    fontSize: "1rem",
  },
  palette: {
    defaultBackground: "#232123",
    activeText: "var(--chakra-colors-pink-300)",
    inactiveText: "var(--chakra-colors-whiteAlpha-200)",
    defaultText: "var(--chakra-colors-whiteAlpha-500)",
    accent: "var(--chakra-colors-pink-300)",
  },
  syntax: {
    tag: "var(--chakra-colors-pink-300)",
    keyword: "var(--chakra-colors-purple-300)",
    property: "var(--chakra-colors-purple-100)",
    string: "var(--chakra-colors-orange-200)",
    plain: "var(--chakra-colors-cyan-300)",
  },
};

const Project: FC<ProjectProps> = ({ children }) => {
  const { theme } = useCustomTheme(themeOverrides);

  return (
    <SandpackProvider customSetup={{ files: files.base }} template="react">
      <ScrollContainer h="calc(100vh - 64px)" w="53vw">
        {children}
      </ScrollContainer>
      <Box pos="fixed" top="64px" right={0} bottom={0} w="47%">
        <SandpackLayout
          theme={theme}
          style={{ borderTop: "none", borderRadius: 0 }}
        >
          <Stack spacing={0} h="calc(100vh - 64px)" w="100%">
            {/* <Navigator /> */}
            <SandpackCodeEditor
              showLineNumbers
              customStyle={{
                height: "50%",
                fontFamily: "poppins",
              }}
            />
            <SandpackPreview customStyle={{ height: "50%" }} />
          </Stack>
        </SandpackLayout>
      </Box>
    </SandpackProvider>
  );
};

export default Project;
