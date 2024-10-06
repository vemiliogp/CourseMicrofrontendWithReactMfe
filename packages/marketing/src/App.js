import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const theme = createTheme({});
const cache = createCache({
  key: "ma",
  prepend: true,
});

export default () => {
  return (
    <div>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/pricing" element={<Pricing />} />
              <Route path="/" element={<Landing />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
};
