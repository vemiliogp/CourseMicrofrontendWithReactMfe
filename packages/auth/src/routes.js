import React from "react";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignUp";

export default (onSignIn) => {
  return [
    {
      path: "/auth/signin",
      element: <SignIn onSignIn={onSignIn} />,
    },
    {
      path: "/auth/signup",
      element: <SignOut onSignIn={onSignIn} />,
    },
  ];
};
