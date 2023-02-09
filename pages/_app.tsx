import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@components/Layout";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

import "@fontsource/figtree/400.css";
import "@fontsource/figtree/500.css";
import "@fontsource/figtree/700.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const chakraTheme: ThemeConfig = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#111827",
        overflowX: "hidden",
      },
    },
  },
  fonts: {
    heading: `'Figtree', sans-serif`,
    body: `'Figtree', sans-serif`,
  },
  colors: {
    brand: {
      darkBlue: "#0E0D37",
      purple: "#7554FA",
      lightPurple: "#E7CBFD",
      // brightBlue: "#70DFFD",
      brightBlue: "#00c9ff",
      white: "#FAFAFA",
      gray: "#7C7A85",
    },
  },
});

const desiredChainId = ChainId.Mumbai;
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS theme={chakraTheme}>
          <Layout title="Splash - Invest by Watching">
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </QueryClientProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
