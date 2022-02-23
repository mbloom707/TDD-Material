import React from 'react';
import ReactDOM from 'react';


const { Component } = React,
      { render } = ReactDOM,
      rootNode = document.getElementById('root')

class App2 extends Component {
  state = {
    listItems: [],
    userInput: '',
  }

  inputChangeHandler = ({target:{value}}) => this.setState({
    userInput: value
  })

  submitHandler = e =>{
    e.preventDefault()
    this.setState({
      listItems: [...this.state.listItems, this.state.userInput],
      userInput: ''
    })
  }


  render() {
    return (
      <div>
        <ul>
          {
            this.state.listItems.map((li,key) => <li {...{key}}>{li}</li>)
          }
        </ul>
        <form onSubmit={this.submitHandler}>
          <input value={this.state.userInput} onChange={this.inputChangeHandler} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default App2;