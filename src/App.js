import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

// Components Import.
import AppRoutes from "./components/AppRoutes";
const Compound = lazy(() => import("./components/Compound"));
const Second = lazy(() => import("./components/Second"));

const App = () => {
  return (
    <Suspense fallback={<h1> Loading Routes ...</h1>}>
      <Router>
        <AppRoutes path="/" />
        <Compound path="/compound" />
        <Second path="/second" />
      </Router>
    </Suspense>
  );
};

render(<App />, document.getElementById("root"));
