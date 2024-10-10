import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import Progress from "./components/Progress";
import Header from "./components/Header";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

const theme = createTheme({});
const cache = createCache({
  key: "co",
  prepend: true,
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
            <Suspense fallback={<Progress />}>
              <Routes>
                <Route
                  path="/auth/*"
                  element={<AuthLazy onSignIn={() => setIsSignedIn(true)} />}
                />
                <Route path="/*" element={<MarketingLazy />} />
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  );
};
