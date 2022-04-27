import { Box, Heading, HStack, Text, Link } from "@chakra-ui/react";
import type { NextPage } from "next";
import InlineCode from "../components/InlineCode";
import Project from "../components/Project";
import styles from "../styles/Home.module.css";
// import TutorialMdx from "../posts/reorder-list.mdx";
import ComponentsMdx from "../posts/components.mdx";
import CodeBlock from "../components/CodeBlock";
import Layout from "../components/Layout";
import { getMdxComponents } from "../components/mdx";

const Home: NextPage = () => {
  return (
    <Layout>
      <Box maxW="3xl" m="0 auto" p={{ base: 6, md: 12 }}>
        <ComponentsMdx components={getMdxComponents()} />
      </Box>
    </Layout>
  );
};

export default Home;
