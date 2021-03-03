import React, { Component } from 'react'

class Form extends Component {

    constructor(props){
        super(props);
        this.state = {username: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(evt){
        evt.preventDefault()
        alert(`You typed: ${this.state.username}`)
        this.setState({username: ""})

    }

    handleChange(evt){
        this.setState({username: evt.target.value})
    }
    
    render() {
        
        return (
            <div>
              <h1>Form Demo</h1>  
              <form onSubmit={this.handleSubmit}>
                  <label htmlFor="username">Username</label>
                  <input 
                  type="text" 
                  id="username"
                  value={this.state.username} 
                  onChange={this.handleChange}>
                  </input>
                  <button>Submit</button>
              </form>
            </div>
        )
    }
}

export default Form