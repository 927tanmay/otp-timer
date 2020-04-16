import OtpTimer from "../lib/timer";
import ReactDOM from "react-dom";
import React, { Component, PropTypes } from "react";

class Example extends Component {
  render() {
    return (
      <div>
        <OtpTimer seconds={10} minutes={0} />
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("root"));
