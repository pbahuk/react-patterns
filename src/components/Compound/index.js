import React from "react";
import Toggle from "./Toggle";
import FlexibleToggle from "./FlexibleToggle";

export default function() {
  return (
    <div>
      <h1> CompoundComponent </h1>
      <Toggle>
        <Toggle.On> The button is clicked </Toggle.On>
        <Toggle.Off> The button is unclicked </Toggle.Off>
        <Toggle.Button />
      </Toggle>
      <h2> Flexible CompoundComponent </h2>
      <FlexibleToggle>
        <FlexibleToggle.On> The button is clicked </FlexibleToggle.On>
        <FlexibleToggle.Off> The button is unclicked </FlexibleToggle.Off>
        <div>
          <FlexibleToggle.Button />
        </div>
      </FlexibleToggle>
    </div>
  );
}
