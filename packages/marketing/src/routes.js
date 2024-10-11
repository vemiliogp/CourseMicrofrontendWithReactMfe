import React from "react";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default () => [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
];
