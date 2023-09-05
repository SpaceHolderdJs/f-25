import { ReduxActionInterface, TodoInteface } from "../types";

export const todosReducer = (todos: TodoInteface[] = [], action: ReduxActionInterface) => {
    switch (action.type) {

        case "CREATE_TODO":
            return [...todos, action.payload];

        case "UPDATE_TODO":
            return todos.map((todo) => todo.id === action.payload.id ? action.payload : todo);

        case "DELETE_TODO":
            // H/W finish deletment of todo !imutable
            return todos

        default:
            return todos;
    }
}