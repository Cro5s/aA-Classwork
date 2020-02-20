import todosReducer from './todos_reducer';
import { combineReducers } from 'redux';
// import { allTodos } from './selectors';

const rootReducer = combineReducers({
    todos: todosReducer,
})

export default rootReducer