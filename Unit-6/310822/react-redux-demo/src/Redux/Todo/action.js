import { ADD_TODO } from "./actionType"

export const addTodo = (data) => ({
    type: ADD_TODO,
        payload: data,
})

