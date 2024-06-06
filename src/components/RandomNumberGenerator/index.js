// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  RandomNum = () => {
    const num = Math.ceil(Math.random() * 100)
    this.setState({count: num})
  }
  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="box">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.RandomNum}>
            Generate
          </button>
          <p>{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
