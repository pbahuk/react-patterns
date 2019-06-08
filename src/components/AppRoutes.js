import React from "react";
import { Link } from "@reach/router";

const AppRoutes = () => (
  <ol>
    <li>
      <Link to="/compound"> Compound Component </Link>
    </li>
    <li>
      <Link to="/render"> Render Props </Link>
    </li>
  </ol>
);
export default AppRoutes;
