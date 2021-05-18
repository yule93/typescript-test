import React, {Component} from 'react';
import Number from "./Number";

interface IState {
  counter: number;
}

class App extends Component<{}, IState> {
  state = {
    counter: 0
  };
  render() {
    const { counter } = this.state;
    return (
      <div>
        <Number count = {counter}/> <button onClick = {this.add}>Add</button>
      </div>
    );
  }

  // void 타입 함수을 선언하는 typescript 문법
  add = () :void => {
    this.setState(prev => {
      return {
        counter: prev.counter + 1
      };
    });
  };
}

export default App;
