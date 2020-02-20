import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveTodos, receiveTodo} from './actions/todo_action'
import Root from './components/root';
import {allTodos} from "./reducers/selectors";

const store = configureStore();
// Should be removed later
window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.allTodos = allTodos;

document.addEventListener('DOMContentLoaded', function(e) {
    const root = document.getElementById('content');

    ReactDOM.render(<Root store={store} />, root);
})

