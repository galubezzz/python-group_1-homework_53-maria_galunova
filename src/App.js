import React, { Component } from 'react';
import './App.css';
import Number from './Number/Number';

class App extends Component {
  state={
    numbers: null
  };

  generateNumber = () => {
      this.setState({
          numbers: [Math.floor(Math.random() * 7) + 5,
              Math.floor(Math.random() * 6) + 12,
              Math.floor(Math.random() * 7) + 18,
              Math.floor(Math.random() * 7) + 25,
              Math.floor(Math.random() * 5) + 32]
      })
  };

  render() {
    return (
      <div className="App">
        <div>
            <button type="button" className="btn btn-secondary btn-lg mt-2" onClick={this.generateNumber}>New numbers</button>
        </div>
          {this.state.numbers &&<div>
              <Number number={this.state.numbers[0]}/>
              <Number number={this.state.numbers[1]}/>
              <Number number={this.state.numbers[2]}/>
              <Number number={this.state.numbers[3]}/>
              <Number number={this.state.numbers[4]}/>
          </div>
          }
      </div>
    );
  }
}

export default App;
