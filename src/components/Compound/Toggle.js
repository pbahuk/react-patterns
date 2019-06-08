import React from "react";

/**
 * Componund Component
 * Manages its state, but leaves rendering to the calling component.
 */
class Toggle extends React.Component {
  state = {
    on: false
  };

  toogle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  static On = props => (props.on ? props.children : null);
  static Off = props => (props.on ? null : props.children);
  static Button = props => {
    return <button onClick={props.toggle}> Click Me ! </button>;
  };

  render() {
    return React.Children.map(this.props.children, element => {
      return React.cloneElement(element, {
        on: this.state.on,
        toggle: this.toogle
      });
    });
  }
}

export default Toggle;
