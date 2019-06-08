import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

// Components Import.
const First = lazy(() => import("./components/First"));
const Second = lazy(() => import("./components/Second"));

const App = () => {
  return (
    <Suspense fallback={<h1> Loading Routes ...</h1>}>
      <Router>
        <First path="/" />
        <Second path="/second" />
      </Router>
    </Suspense>
  );
};

render(<App />, document.getElementById("root"));
