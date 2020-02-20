import React from 'react';

export const TodoListItem = (props)=> {
    return (
        <li key={props.todo.id}>{props.todo.title}</li>
    )
}