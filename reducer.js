import storage from "./util/storage.js";

const init = {
    todos: storage.getTodos(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed,
    },
    editIndex: null,
}


const actions = {
    add({ todos, idTask}, title, time) {
        if(todos.length == 0) {
            localStorage.id = 0;
        } else {
            localStorage.id = Number(localStorage.id) + 1;
        }
        var id = localStorage.id;
        todos.push({ id, title, time, completed: false})
        storage.setTodos(todos);
    },

    toggle({ todos }, id) {
        const index = todos.findIndex(todo => todo.id == id);
        const todo = todos[index];
        todo.completed = !todo.completed;
        storage.setTodos(todos);
    },   

    delete({ todos }, id) {
        const index = todos.findIndex(todo => todo.id == id);
        todos.splice(index, 1);
        storage.setTodos(todos);
    },
    switchFilter(state, type) {
        state.filter = type;
    },
    clearCompleted(state) {
        state.todos = state.todos.filter(state.filters.active);
        storage.setTodos(state.todos);
    },
    editTask(state, title, id) {
        console.log(title)
        const index = state.todos.findIndex(todo => todo.id == id);
        state.editIndex = index;
        if(state.editIndex != null) {
            if(title) {
                state.todos[state.editIndex].title = title;
                storage.setTodos(state.todos);
            }
            else {
            this.delete(state, state.editIndex)
            }
            state.editIndex = null;
        }
    },
    cancelEdit(state) {
        state.editIndex = null;
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state;
}