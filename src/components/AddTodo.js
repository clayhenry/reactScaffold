import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        title : ''

    }

    onSubmit =(e) => {

            e.preventDefault();
            this.props.addTodo(this.state.title);
            //clear feld
            this.setState({title : ''});
    }

    changeHandler = (e)=>{
        this.setState({ title : e.target.value })

    }
    render() {

            return (
                    <form onSubmit={this.onSubmit}>
                <div>
                    <div>{this.state.title}</div>
<input type="text" name="title" placeholder="Add a toto item..." value={this.state.title} onChange={this.changeHandler}></input>
<input type="submit" value="Submit" className="btn"></input>

                </div>
                </form>
            )

    }

}

export default AddTodo;