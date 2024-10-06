import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

const theme = createTheme({});
const cache = createCache({
  key: "co",
  prepend: true,
});

export default () => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <Header />
            <MarketingApp />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  );
};
