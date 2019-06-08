import React from "react";

class Toggle extends React.Component {
  render() {
    let message = this.props.on ? "Button is clicked" : "Button is unclicked";

    return (
      <div>
        {message}
        <button onClick={this.props.toggle}> Click Me !</button>
      </div>
    );
  }
}

export default Toggle;
