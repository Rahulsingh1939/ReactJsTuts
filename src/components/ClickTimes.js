import React, { Component } from 'react'

class ClickTimes extends Component {
    constructor() {
      super()
    
      this.state = {
         msg:1
      }
    }
    changeMsg()
    {
        this.setState({
            msg:this.state.msg*2
        })
    }
    
  render() {

    return (
      <div>
        <hi>{this.state.msg}<br></br></hi>
        <button onClick={() => this.changeMsg()} >Click me</button>
      </div>
    )
  }
}

export default ClickTimes
