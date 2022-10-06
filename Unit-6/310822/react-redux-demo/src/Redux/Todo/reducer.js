import { ADD_TODO } from "./actionType";

const initState = {
   
    todo: [],
};

export const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, todo: [...state.todo, action.payload],
            };
        
        default:
            return state;
    }
}