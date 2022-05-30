import React from "react";
import Lifecycle from "./lifeCycle";

export default class LifeCycleTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClick = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <br />
        <div>
          {this.state.show === true && <Lifecycle setStartDate={new Date()} />}
          <button onClick={this.handleClick}>Show Colors</button>
        </div>
      </div>
    );
  }
}
