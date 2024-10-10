import React from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const theme = createTheme({});
const cache = createCache({
  key: "au",
  prepend: true,
});

export default ({ router }) => {
  return (
    <div>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
};
