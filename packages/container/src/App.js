import React, { lazy, Suspense, useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";

import Progress from "./components/Progress";
import Header from "./components/Header";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

export default () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <div>
      <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
      <Suspense fallback={<Progress />}>
        <Routes>
          <Route
            path="/auth/*"
            element={<AuthLazy onSignIn={() => setIsSignedIn(true)} />}
          />
          <Route
            path="/dashboard"
            element={!isSignedIn ? <Navigate to="/" /> : <DashboardLazy />}
          />
          <Route path="/*" element={<MarketingLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
