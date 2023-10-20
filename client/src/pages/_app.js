import { extendTheme, ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/Layout";

// Define your custom Chakra UI theme
const theme = extendTheme({
  // Your theme configuration here
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
