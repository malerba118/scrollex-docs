import { Box, Button, HStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import ExamplesMdx from "../posts/examples.mdx";
import Layout from "../components/Layout";
import { getMdxComponents } from "../components/mdx";
import { useState } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const page = Number(router.query.page) || 1;

  const setPage = (page: number) => {
    router.replace({
      query: { ...router.query, page },
    });
  };

  return (
    <Layout>
      <Box maxW="3xl" m="0 auto" p={{ base: 6, md: 12 }}>
        <ExamplesMdx page={page} components={getMdxComponents()} />
        <HStack>
          <Button isDisabled={page <= 1} onClick={() => setPage(page - 1)}>
            Prev
          </Button>
          <Button
            bg={page === 1 ? "pink.300" : undefined}
            _hover={{ bg: page === 1 ? "pink.300" : undefined }}
            _active={{ bg: page === 1 ? "pink.300" : undefined }}
            onClick={() => setPage(1)}
          >
            1
          </Button>
          <Button
            bg={page === 2 ? "pink.300" : undefined}
            _hover={{ bg: page === 2 ? "pink.300" : undefined }}
            _active={{ bg: page === 2 ? "pink.300" : undefined }}
            onClick={() => setPage(2)}
          >
            2
          </Button>
          <Button isDisabled={page >= 2} onClick={() => setPage(page + 1)}>
            Next
          </Button>
        </HStack>
      </Box>
    </Layout>
  );
};

export default Home;
