import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/Layout/Header';
import AddTodo from './components/AddTodo';

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
        finished: true
      },
      {
        id: 3,
        title: "Call mom",
        finished: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.finished = !todo.finished;
      }
      return todo;
    })})
  }

  deleteTodo = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id)});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo />
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;
