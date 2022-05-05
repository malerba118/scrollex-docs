import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

if (typeof window !== "undefined") {
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };
  window.addEventListener("resize", appHeight);
  appHeight();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo
        title="Scrollex"
        description="A react library to build beautiful scroll experiences with minimal code."
        canonical="https://scrollex-docs.vercel.app/"
        openGraph={{
          url: "https://scrollex-docs.vercel.app/",
          title: "Scrollex",
          description:
            "A react library to build beautiful scroll experiences with minimal code.",
          images: [
            {
              url: "https://scrollex-docs.vercel.app/scrollex.png",
              width: 734,
              height: 490,
              alt: "Scrollex",
              type: "image/jpeg",
            },
          ],
          site_name: "Scrollex",
        }}
        twitter={{
          handle: "@austin_malerba",
          site: "@austin_malerba",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
