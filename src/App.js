import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

// Components Import.
import First from "./components/First";
import Second from "./components/Second";

const App = () => {
  return (
    <h1>
      "Hello World"
      <Router>
        <First path="/" />
        <Second path="/second" />
      </Router>
    </h1>
  );
};

render(<App />, document.getElementById("root"));
