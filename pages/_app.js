import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
