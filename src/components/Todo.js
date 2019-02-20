import React, { Component } from 'react';
import Todoitems from './Todoitem';
import propTypes from 'prop-types';
// import logo from './logo.svg';
// import './App.css';

class Todo extends Component {
  // Methods without arrow functions will require to bind 'this' eg. 'this.markcomplate.bind(this)'


  render() {

  
    // key={todo.id} elimiates the warning in the console
   
    return this.props.todo.map((todo)=> <Todoitems key={todo.id} items={todo} delTodo={this.props.delTodo} markComplete={this.props.markComplete}  /> )

  }
}


Todo.propTypes = {
    todo : propTypes.array.isRequired

}
export default Todo;
