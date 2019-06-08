import React from "react";

class ToggleChanger extends React.Component {
  render() {
    return <div onClick={this.props.toggle}>Try clicking me !</div>;
  }
}

export default ToggleChanger;
