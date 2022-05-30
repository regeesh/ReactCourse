import React from "react";

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: "red",
      color2: "green",
      color3: "blue",
      enterColor: "",
      isActive: true,
    };
  }

  handleInput = (e) => {
    this.setState({
      enterColor: e.target.value,
    });
  };

  handleInput1 = () => {
    this.setState({
      color1:
        this.state.enterColor !== ""
          ? this.state.enterColor
          : this.state.color1,
    });
  };

  handleInput2 = () => {
    this.setState({
      color2:
        this.state.enterColor !== ""
          ? this.state.enterColor
          : this.state.color2,
    });
  };

  handleInput3 = () => {
    this.setState({
      color3:
        this.state.enterColor !== ""
          ? this.state.enterColor
          : this.state.color3,
    });
  };

  render() {
    return (
      <div>
        <div
          id="color1"
          onClick={this.handleInput1}
          style={{
            backgroundColor:
              this.state.isActive === true
                ? this.state.color1
                : this.state.enterColor,
            padding: 20,
            width: 100,
            height: 75,
            borderRadius: 25,
            margin: 10,
          }}
        ></div>
        <div
          id="color2"
          onClick={this.handleInput2}
          style={{
            backgroundColor:
              this.state.isActive === true
                ? this.state.color2
                : this.state.enterColor,
            padding: 20,
            width: 100,
            height: 75,
            borderRadius: 25,
            margin: 10,
          }}
        ></div>
        <div
          id="color3"
          onClick={this.handleInput3}
          style={{
            backgroundColor:
              this.state.isActive === true
                ? this.state.color3
                : this.state.enterColor,
            padding: 20,
            width: 100,
            height: 75,
            borderRadius: 25,
            margin: 10,
          }}
        ></div>
        <div>
          <br />
          <input
            type="text"
            id="txtColorName"
            placeholder="enter color name"
            onChange={this.handleInput}
          ></input>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("from component did mount");
  }

  componentWillUnmount() {
    var endaDate = new Date();
    var diff = endaDate - this.props.setStartDate;
    console.log("Time difference is : " + diff);
  }
}
