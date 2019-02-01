import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Sell ps1",
        finished: false
      },
      {
        id: 2,
        title: "Sell ps2",
        finished: false
      },
      {
        id: 3,
        title: "Call mom",
        finished: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
