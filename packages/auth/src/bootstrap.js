import React from "react";
import { createRoot } from "react-dom/client";
import { createMemoryRouter, createBrowserRouter } from "react-router-dom";
import getRoutes from "./routes";
import App from "./App";

const mount = (el, { onNavigate, onSignIn, initialPath, defaultRouter }) => {
  const router = defaultRouter || createMemoryRouter(getRoutes({ onSignIn }), { initialEntries: [initialPath] })

  if (onNavigate) {
    router.subscribe(({ location }) => onNavigate(location));
  }

  createRoot(el).render(<App router={router} />);

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      if (router.state.location.pathname !== nextPathname) {
        router.navigate(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultRouter: createBrowserRouter(getRoutes({})) });
  }
}

export { mount };
