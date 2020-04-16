import React, { Component } from "react";
import PropTypes from 'prop-types'


export default class Otp extends Component {
    
    static get propTypes () {
        return {
          options: PropTypes.object
        }
      }   


  constructor(props) {
    super(props);
    this.state = {
      showfield: false,
      minutes: this.props.options.min,
      seconds: this.props.options.sec ,

    };
  }



  componentDidMount() {

    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

//   resendEvent = () => {

//   };


  render() {


    const verifytext3 = {
        height: "22px",
        textAlign: "left",
        fontSize: "16px",
        fontFamily: "Roboto",
        lineHeight: "22px",
        color: "#000000",
      
      };

    const buttonStyling={
        border: "none",
        background: "#5cb85c",
        color: "#fff",
        marginRight: 0,
        fontSize: "16px",
        lineHeight: "22px"
    }  


    return (
      
                  <div style={verifytext3}>
                    {this.state.minutes === 0 && this.state.seconds === 0 ? (
                      <button
                        //onClick={this.resendEvent}
                        style={buttonStyling}
                      >
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
 

  
        
      
    )
  }
}

