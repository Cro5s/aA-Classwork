export const fetchTodos = () => {
    return $.ajax({
        method: "GET",
        url: "/api/todos"
    });
}

export const createTodo = () => {
    return $.ajax({
        method: "POST",
        url: "/api/todos",
        data: { todo: { title: title, body: body, done: done } }
    })
}