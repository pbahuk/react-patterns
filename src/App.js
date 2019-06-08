import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

// Components Import.
import AppRoutes from "./components/AppRoutes";
import RenderProps from "./components/RenderProps";
const Compound = lazy(() => import("./components/Compound"));

const App = () => {
  return (
    <Suspense fallback={<h1> Loading Routes ...</h1>}>
      <Router>
        <AppRoutes path="/" />
        <Compound path="/compound" />
        <RenderProps path="/render" />
      </Router>
    </Suspense>
  );
};

render(<App />, document.getElementById("root"));
