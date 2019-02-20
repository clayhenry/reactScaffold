import React, { Component } from 'react';
import propTypes from 'prop-types';

// import logo from './logo.svg';
// import './App.css';

const btnStyle ={
    background: '#ff000'
}

class Todoitem extends Component {

    // Note: 'items' is based on what you called in the parent component as a parameter
  
  getStyle = ()=>{

    if( this.props.items.completed ){
            return {backgroundColor: 'blue'}
    }
  
    return {backgroundColor: 'pink'}
  }




    render() {

       const{id, title} = this.props.items;
       
    return (
      <div style={this.getStyle()}>
      <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}></input>
       <h1>{title}</h1>
       <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
       <span style={{backgroundColor:'green'}}></span>
      </div>
     
    );
  }
}



Todoitem.propTypes = {
    items : propTypes.object.isRequired

}

export default Todoitem;
