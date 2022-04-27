import { Heading, Text, Link } from "@chakra-ui/react";
import CodeBlock from "./CodeBlock";
import SandpackCodeBlock from "./SandpackCodeBlock";
import InlineCode from "./InlineCode";

export const getMdxComponents = ({ useSandpack = false } = {}) => ({
  h1: (props: any) => (
    <Heading fontWeight="800" mt={8} mb={4} size="2xl" {...props} />
  ),
  h2: (props: any) => (
    <Heading fontWeight="700" mt={8} mb={4} size="xl" {...props} />
  ),
  h3: (props: any) => <Heading mt={8} mb={4} size="lg" {...props} />,
  h4: (props: any) => <Heading mt={8} mb={4} size="md" {...props} />,
  h5: (props: any) => <Heading mt={8} mb={4} size="sm" {...props} />,
  p: (props: any) => <Text mt={4} mb={4} size="md" {...props} />,
  code: (props: any) => <InlineCode {...props} />,
  pre: (props: any) => {
    const className = props.children?.props?.className || "";
    const code = props.children?.props?.children?.trim() || "";
    const language = className.replace(/language-/, "");

    if (useSandpack) {
      return (
        <SandpackCodeBlock
          code={code}
          language={language}
          path={props.path}
          showLineNumbers={props.showLineNumbers}
        />
      );
    } else {
      return (
        <CodeBlock
          code={code}
          language={language}
          path={props.path}
          showLineNumbers={props.showLineNumbers}
        />
      );
    }
  },
  a: (props: any) => (
    <Link size="md" textDecoration="underline" isExternal {...props} />
  ),
});
