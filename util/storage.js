const TODOS_STORAGE_KEY = 'TODOS'
const ID_STORAGE_KEY = 'ID'
export default {
    getTodos() {
        return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || []
    },
    setTodos(todos) {
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
    }
}