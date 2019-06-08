import React, { useContext, createContext } from "react";

const ToggleContext = createContext([
  {
    on: false,
    toggle: () => {}
  },
  state => state
]);

class Toggle extends React.Component {
  state = {
    on: false
  };

  toogle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  static On = props => (
    <ToggleContext.Consumer>
      {contextValue => (contextValue.on ? props.children : null)}
    </ToggleContext.Consumer>
  );
  static Off = props => (
    <ToggleContext.Consumer>
      {contextValue => (contextValue.on ? null : props.children)}
    </ToggleContext.Consumer>
  );
  static Button = props => (
    <ToggleContext.Consumer>
      {contextValue => (
        <button onClick={contextValue.toggle}> Click Me ! </button>
      )}
    </ToggleContext.Consumer>
  );

  render() {
    return (
      <ToggleContext.Provider
        value={{
          on: this.state.on,
          toggle: this.toogle
        }}
      >
        {this.props.children}
      </ToggleContext.Provider>
    );
  }
}

export default Toggle;
