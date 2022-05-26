import React from "react";

export default class StateVars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bg: "red",
      bgButton: "",
    };
  }
  render() {
    return (
      <div>
        <div
          style={{ backgroundColor: this.state.bg, height: 100, width: 200 }}
        >
          hello from statevars component
        </div>
        <br />
        <br />
        <input
          type="text"
          onChange={this.setBackground}
          placeholder="enter color name"
        ></input>
        <br />
        <br />
        <input
          type="text"
          id="txtColorName"
          placeholder="enter color name"
        ></input>
        <button onClick={this.changeColor}>Change color</button>
        <div
          style={{
            backgroundColor: this.state.bgButton,
            height: 100,
            width: 200,
          }}
        >
          Click the button to change the color
        </div>
        <br />
        <br />
      </div>
    );
  }
  setBackground = (e) => {
    this.setState({
      bg: e.target.value,
    });
  };

  changeColor = () => {
    var colorName = document.getElementById("txtColorName");
    this.setState({
      bgButton: colorName.value,
    });
  };
}
