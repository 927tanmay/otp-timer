# otp-timer

## Install

Install by executing either `npm install otp-timer` or `yarn add otp-timer`

## Demo

[react-otp-timer](https://react-otp-timer.herokuapp.com/ "react-otp-timer")

## Usage?

```
import OtpTimer from 'otp-timer'
import React, { Component } from "react";

 handleClick=()=>{
   //desired function to be performed on clicking resend button
 }

export default  class Otp extends Component {
  render () {
    return (
      <div>
        <Timer seconds= {30} minutes={0} resend={this.handleClick} />
      </div>
    )
  }
}


```

## User Guide?

Functionality:

| Prop name  |                           Description                           | Default Value |                Example |
| :--------- | :-------------------------------------------------------------: | :-----------: | ---------------------: |
| seconds    |          number of seconds for which timer must be set          |      30       |           seconds={20} |
| minutes    |        number of minutes for which the timer must be set        |       0       |            minutes={1} |
| resend     | function that would get triggered on clicking the resend button |      n/a      | resend={function name} |
| text       |                content that you want to put down                |  Time Left :  |       text="Time Left" |
| ButtonText |                         button content                          |    Resend     |    ButtonText="Resend" |

Styling:

| Prop name   |                 Description                 | Default Value |                Example |
| :---------- | :-----------------------------------------: | :-----------: | ---------------------: |
| textColor   |      describes the timer's text color       |   "#000000"   |  textColor={"#000000"} |
| buttonColor |      describes the button's text color      |    "#fff"     |   buttonColor={"#fff"} |
| background  | describe the background color of the button |   "#0033cc"   | background={"#0033cc"} |

---
