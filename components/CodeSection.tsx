import React, { createContext, FC, useContext, useState } from "react";
import { Button, Flex, Stack, Tag, Icon } from "@chakra-ui/react";
import {
  SandpackThemeProvider,
  useSandpack,
  useSandpackTheme,
} from "@codesandbox/sandpack-react";
import { formatFilePath, SandpackLanguageSupport } from "./utils";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { lineNumbers } from "@codemirror/gutter";
import {
  getCodeMirrorLanguage,
  getEditorTheme,
  getSyntaxHighlight,
} from "./utils";
import { Box } from "@chakra-ui/react";
import { RiFileEditLine } from "react-icons/ri";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface CodeSectionApi {
  selected: string | null;
  setSelected: any;
}

const CodeSectionContext = createContext<CodeSectionApi | null>(null);

interface CodeSectionProps {
  files: any;
  disablePadding?: boolean;
}

export const CodeSectionProvider: FC<any> = ({ children }) => {
  const [selected, setSelected] = useState(null);
  return (
    <CodeSectionContext.Provider value={{ selected, setSelected }}>
      {children}
    </CodeSectionContext.Provider>
  );
};

const CodeSection: FC<CodeSectionProps> = ({
  files,
  disablePadding,
  ...otherProps
}) => {
  const { sandpack } = useSandpack();
  const [id] = useState(() => String(Math.random()));
  const section = useContext(CodeSectionContext);

  return (
    <MotionBox
      pos="relative"
      onViewportEnter={() => {
        section?.setSelected(id);
      }}
      viewport={{ margin: "-50% 0% -50% 0%" }}
      bg={section?.selected === id ? "blackAlpha.400" : "none"}
      px={disablePadding ? undefined : { base: 4, md: 16 }}
      py={disablePadding ? undefined : { base: 2, md: 6 }}
      _after={{
        content: '""',
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: "3px",
        bg: section?.selected === id ? "pink.300" : "none",
      }}
      {...otherProps}
    />
  );
};

export default CodeSection;
