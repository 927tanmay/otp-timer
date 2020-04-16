import OtpTimer from '../lib/timer' 
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class Example extends Component {

  render () {

    let OPTIONS = {sec: 100, min:0}
    return (
      <div>
        <OtpTimer options={OPTIONS} />
      </div>
    )
  }
}

ReactDOM.render( <Example />, document.getElementById('root') )
