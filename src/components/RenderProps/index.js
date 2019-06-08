import React from "react";
import Toggle from "./Toggle";
import ToggleChanger from "./ToogleChanger";
import Page from "./Page";

export default function() {
  return (
    <Page
      render={props => (
        <div>
          <Toggle {...props} />
          <ToggleChanger {...props} />
        </div>
      )}
    />
  );
}
