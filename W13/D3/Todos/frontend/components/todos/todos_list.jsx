import React from 'react';
import {TodoListItem} from '../todo_list/todo_list_item'
import TodoForm from '../todo_list/todo_form'

export const TodoList = (props) => { 

    const todoLists = props.todos.map((todo, idx) => <TodoListItem key={idx} todo={todo}/>)
    
    return (
        <ul>
            {todoLists}
            <TodoForm receiveTodo={props.receiveTodo}/>
        </ul> 
    )
}