import { ThemeProvider } from "styled-components";
import { light } from "../styles/original";
import { GlobalStyle } from "../styles/global";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
