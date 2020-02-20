import React from 'react';
import {connect} from 'react-redux';
import {TodoList} from './todos_list'
import {allTodos} from '../../reducers/selectors'

const mapStateToProps = state => ({  
    todos: allTodos(state)
})

const mapDispatchToProps = dispatch => ({
    receiveTodo: (todo) => dispatch(receiveTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);