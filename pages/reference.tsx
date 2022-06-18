import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import ReferenceMdx from "../posts/reference.mdx";
import Layout from "../components/Layout";
import { getMdxComponents } from "../components/mdx";

const Home: NextPage = () => {
  return (
    <Layout>
      <Box maxW="3xl" m="0 auto" p={{ base: 6, md: 12 }}>
        <ReferenceMdx components={getMdxComponents()} />
      </Box>
    </Layout>
  );
};

export default Home;
