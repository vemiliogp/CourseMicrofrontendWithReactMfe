import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const theme = createTheme({});

export default () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/pricing" element={<Pricing />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};
