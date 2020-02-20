import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_action";

const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};


const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_TODOS:
            newState = Object.assign({}, state);
            action.todos.forEach((obj) => {
                newState[obj.id] = obj;
            })
            return newState;
        case RECEIVE_TODO:
            newState = Object.assign({}, state);
            const newTodo = action.todo;
            newState[newTodo.id] = newTodo;
            return newState;
        default:
            return state;
    };
}

export default todosReducer;