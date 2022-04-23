import { Box, Heading, Portal, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import InlineCode from "../components/InlineCode";
import Project from "../components/Project";
import styles from "../styles/Home.module.css";
// import TutorialMdx from "../posts/reorder-list.mdx";
import TutorialMdx from "../posts/scroll.mdx";
import CodeBlock from "../components/CodeBlock";
import { SandpackThemeProvider } from "@codesandbox/sandpack-react";

const mdxComponents = {
  h1: (props: any) => (
    <Heading fontWeight="800" mt={8} mb={4} size="2xl" {...props} />
  ),
  h2: (props: any) => (
    <Heading fontWeight="700" mt={8} mb={4} size="lg" {...props} />
  ),
  h3: (props: any) => <Heading mt={8} mb={4} size="md" {...props} />,
  h4: (props: any) => <Heading mt={8} mb={4} size="sm" {...props} />,
  p: (props: any) => <Text mt={4} mb={4} size="md" {...props} />,
  code: (props: any) => <InlineCode {...props} />,
  pre: (props: any) => {
    const className = props.children?.props?.className || "";
    const code = props.children?.props?.children?.trim() || "";
    const language = className.replace(/language-/, "");
    return (
      <CodeBlock
        code={code}
        language={language}
        path={props.path}
        showLineNumbers={props.showLineNumbers}
      />
    );
  },
};

const Home: NextPage = () => {
  return (
    <SandpackThemeProvider theme="sandpack-dark">
      <Box h="64px" borderBottom="1px solid rgba(255,255,255, .1)"></Box>
      <Project>
        <Box>
          <TutorialMdx components={mdxComponents} />
        </Box>
      </Project>
    </SandpackThemeProvider>
  );
};

export default Home;
