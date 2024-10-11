import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import App from "./App";

const theme = createTheme({});
const cache = createCache({
  key: "co",
  prepend: true,
});

createRoot(document.querySelector("#root")).render(
  <CacheProvider value={cache}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </CacheProvider>
);
