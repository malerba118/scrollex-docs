import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Project from "../components/Project";
import GuideMdx from "../posts/guide.mdx";
import Layout from "../components/Layout";
import { getMdxComponents } from "../components/mdx";

const Home: NextPage = () => {
  return (
    <Layout>
      <Project theme="sandpack-dark">
        <Box>
          <GuideMdx components={getMdxComponents({ useSandpack: true })} />
        </Box>
      </Project>
    </Layout>
  );
};

export default Home;
