import React from "react";
import Toggle from "./Toggle";

export default function() {
  return (
    <div>
      <h1> CompoundComponent </h1>
      <Toggle>
        <Toggle.On> The button is clicked </Toggle.On>
        <Toggle.Off> The button is unclicked </Toggle.Off>
        <Toggle.Button />
      </Toggle>
    </div>
  );
}
