import { INCREMENT } from "./actionType";

const initState = {
    count: 0,
    
};

export const countReducer = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, count: state.count+action.payload
            }
        default:
            return state;
    }
}