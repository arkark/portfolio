import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const theme = extendTheme({
  fonts: {
    heading: '"Inter", "BIZ UDGothic", sans-serif',
    body: '"Inter", "BIZ UDGothic", sans-serif',
    mono: '"Fira Mono", "BIZ UDGothic", monospace',
  },
  styles: {
    global: {
      body: {
        maxWidth: "100%",
        overflowX: "hidden",
      },
    },
  },
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default MyApp;
