import { ADD_TODOS, DEC_COUNT, INC_COUNT } from "./actionType"

export const incCount = (data) => ({
    type: INC_COUNT,
    payload: data,
});
export const decCount = (data) => ({
    type: DEC_COUNT,
    payload: data,
});
export const addTodos = (data) => ({
    type: ADD_TODOS,
    payload: data,
});