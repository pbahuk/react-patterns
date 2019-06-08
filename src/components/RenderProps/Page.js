import React from "react";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      on: !this.state.on
    });
  }

  render() {
    const { render } = this.props;
    return <div>{render({ on: this.state.on, toggle: this.toggle })}</div>;
  }
}

export default Page;
