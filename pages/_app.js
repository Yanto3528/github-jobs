import { ThemeProvider } from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";
import Layout from "../components/Layout";
import JobProvider from "../context/JobContext";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <JobProvider>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </JobProvider>
    </ThemeProvider>
  );
}
