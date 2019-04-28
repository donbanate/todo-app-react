import React, { Component } from 'react';
import './App.css';
import TodoList from './component/TodoList';
import TodoData from './data';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: TodoData
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTask = prevState.todos.map(task => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      });
      return {
        todos: updatedTask
      };
    });
  }

  render() {
    const taskItems = this.state.todos.map(todo => (
      <TodoList key={todo.id} task={todo} unCheck={this.handleChange} />
    ));

    return (
      <div className="todo-list">
        <h1>Todo App</h1>
        {taskItems}
      </div>
    );
  }
}
