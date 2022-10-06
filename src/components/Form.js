import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:''
      }
    }
    HandleOnChange = (event) => {
        this.setState({
            username:event.target.value
        })
    }
    
  render() {
    return (
        <form>
            <label>UserName</label>
            <input type='text' value={this.state.username} onChange={this.state.HandleOnChange} ></input>
        </form>
    )
  }
}

export default Form
