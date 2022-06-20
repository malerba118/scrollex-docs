import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  useSandpack,
  useSandpackNavigation,
} from "@codesandbox/sandpack-react";
import { nanoid } from "nanoid";
import { Box } from "@chakra-ui/react";
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
  refresh?: boolean;
}

export const CodeSectionProvider: FC<any> = ({ children }) => {
  const [selected, setSelected] = useState(null);
  return (
    <CodeSectionContext.Provider value={{ selected, setSelected }}>
      {children}
    </CodeSectionContext.Provider>
  );
};

const timeout = async (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const CodeSection: FC<CodeSectionProps> = ({
  files = {},
  disablePadding,
  refresh = false,
  ...otherProps
}) => {
  const { sandpack } = useSandpack();
  const nav = useSandpackNavigation();

  const [id] = useState(() => nanoid());
  const section = useContext(CodeSectionContext);

  const updateFiles = async (files: any) => {
    for (const filePath in files) {
      await timeout(50);
      sandpack.updateFile(filePath, files[filePath]);
    }
  };

  useEffect(() => {
    if (section?.selected === id) {
      updateFiles(files).then(() => {
        if (refresh) {
          setTimeout(() => {
            nav.refresh();
          }, 1000);
        }
      });
    }
  }, [section?.selected, JSON.stringify(files), refresh]);

  return (
    <MotionBox
      pos="relative"
      onViewportEnter={() => {
        section?.setSelected(id);
      }}
      viewport={{ margin: "-50% 0% -50% 0%" }}
      bg={section?.selected === id ? "blackAlpha.400" : "none"}
      px={disablePadding ? undefined : { base: 6, md: 16 }}
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
