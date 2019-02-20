import React, { Component } from 'react';
import axios  from 'axios';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Todo from  './components/Todo';
import Header from './components/layouts/header'
import AddTodo from './components/AddTodo';
import About from './components/pages/about';



import './App.css';
import Axios from 'axios';

class App extends Component {
  state = {

    todoStatic : [{
      id : 1,
      title : 'Some task to do',
      completed : true
    },
    {
      id : 2,
      title : 'Some OTHER task ',
      completed : false
    },
    {
      id : 3,
      title : 'Dont forget to do this',
      completed : false
    }
  
  ],

  todo : []
  }


  componentDidMount(){

    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todo: res.data}))
  }

  markComplete = (id)=> {
    this.setState({todo: this.state.todo.map( to =>{

      if(to.id === id){
        to.completed = !to.completed
      }
      return to
           
    } )})
  }

  delTodo = (id)=>{

    this.setState({ todo : this.state.todo.filter(item =>  item.id !==id )} )
  }

  addTodo = (title) =>{
    
axios.post("https://jsonplaceholder.typicode.com/todos", {
    title: title,
    completed: false
}).then(res => { 
  console.log(res.data);
  this.setState({ todo: [...this.state.todo, res.data] })}  ) ;

    // let newId = (this.state.todo.length + 1);
  
    //  let newTodo = {
    //     id :newId,
    //     title: title,
    //     completed: false

    //  }
    // this.setState( {todo: [...this.state.todo, newTodo]} )

  }

  render() {

  
    return (


<Router>
      <div className="App">
      <Header />
      <Route exact path="/" render={props => (

          <React.Fragment>
                   <Todo todo= {this.state.todo}  markComplete={this.markComplete} delTodo={this.delTodo}   />
                   <AddTodo addTodo = {this.addTodo}/>
          </React.Fragment>

      )}>
          </Route>

        <Route path ="/About" component={About} />


      </div>
   </Router>
    );
  }
}

export default App;
