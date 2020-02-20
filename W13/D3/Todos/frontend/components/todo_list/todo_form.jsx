import React from 'react';
import uniqueId from "../../util/uniqueId"

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: "", body: "", done: false};
        this.updateField = this.updateField.bind(this);
        this.createTodo = this.createTodo.bind(this);
    }

    updateField(field){
        return (e) => {
          this.setState({[field]: e.target.value});       
        };
    }

    createTodo(e) {
        e.preventDefault();
        const todo = Object.assign({}, this.state, {id: uniqueId()})
        this.props.receiveTodo(todo)
        this.setState({title: "", body: "", done: false});
    }

    render() {
        return (
            <form onSubmit={this.createTodo}>
                <label htmlFor="title">Title:</label>
                <br/>
                <input type="text" id="title" onChange={this.updateField("title")} value={this.state.title}/>
                <br/>
                <br/>
                <label htmlFor="body">Body:</label>
                <br/>        
                <textarea id="body" cols="30" rows="10" onChange = {this.updateField("body")} value={this.state.body}></textarea>
                <br/>
                <br/>  
                <label htmlFor="tags">Tags:</label>
                <br/>
                <input type="text" id="tags" onChange={this.updateField("tags")}/>
                <br/>
                <br/>
                <button>Create Todo!</button>
            </form>
        )
    }
}

export default TodoForm;