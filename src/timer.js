import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Otp extends Component {
  static get propTypes() {
    return {
      options: PropTypes.object,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      showfield: false,
      minutes: this.props.minutes ? this.props.minutes : 0,
      seconds: this.props.seconds ? this.props.seconds : 30,
    };
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  handleClick() {
    this.props.resend();
    this.setState({
      minutes: this.props.minutes ? this.props.minutes : 0,
      seconds: this.props.seconds ? this.props.seconds : 30,
    });
  }
  //   wrapperFunction(e){
  //     this.props.resend;
  //     this.handleClick.bind(this);
  // }

  render() {
    const textStyle = {
      fontSize: "16px",
      fontFamily: "Roboto",
      lineHeight: "22px",
      color: this.props.textColor ? this.props.textColor : "#000000",
    };

    const buttonStyling = {
      border: "none",
      background: this.props.background ? this.props.background : "#5cb85c",
      color: this.props.buttonColor ? this.props.buttonColor : "#fff",
      fontSize: "16px",
      lineHeight: "22px",
    };

    return (
      <div style={textStyle}>
        {this.state.minutes === 0 && this.state.seconds === 0 ? (
          <button style={buttonStyling} onClick={this.handleClick.bind(this)}>
            Resend
          </button>
        ) : (
          <span>
            Time left:{" "}
            {this.state.minutes < 10
              ? `0${this.state.minutes}`
              : this.state.minutes}
            :
            {this.state.seconds < 10
              ? `0${this.state.seconds}`
              : this.state.seconds}
          </span>
        )}
      </div>
    );
  }
}
