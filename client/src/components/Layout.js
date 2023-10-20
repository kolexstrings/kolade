import React from 'react';
import { Box, ChakraProvider, Container, extendTheme, CSSReset, ThemeProvider } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';

const theme = extendTheme({
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: '"Helvetica Neue", sans-serif',
    heading: '"Helvetica Neue", sans-serif',
  },
});

export default function Layout({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <ThemeProvider theme={theme}>
        <Box bg="gray.100" minH="100vh">
          <Container maxW="container.lg" py={6}>
            {children}
          </Container>
        </Box>
      </ThemeProvider>
    </ChakraProvider>
  );
}
