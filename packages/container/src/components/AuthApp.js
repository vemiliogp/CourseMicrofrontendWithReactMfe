import { mount } from "auth/AuthApp";
import React, { useRef, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [onParentNavigate, setOnParentNavigate] = useState();

  useEffect(() => {
    const { onParentNavigate: onHostNavigate } = mount(ref.current, {
      initialPath: location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = location;

        if (pathname !== nextPathname) {
          navigate(nextPathname);
        }
      },
      onSignIn,
    });

    setOnParentNavigate(() => onHostNavigate);
  }, []);

  useEffect(() => {
    if (onParentNavigate) {
      onParentNavigate(location);
    }
  }, [location]);

  return <div ref={ref} />;
};
