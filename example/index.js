import OtpTimer from "../lib/timer";
import ReactDOM from "react-dom";
import React, { Component, PropTypes } from "react";
import './index.css'

class Example extends Component {
  submit() {
    console.log("button clicked");
  }
  render() {
    return (
      <div>
        <OtpTimer
          seconds={2}
          minutes={0}
          resend={this.submit.bind(this)}
          text="Time:"
          ButtonText="Resend"
          timerSpanClass= "btn"
          timerSpanStyle={{ fontSize: "16px" }}
          buttonStyle={{ backgroundColor: "lightBlue" }}
        />
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("root"));
