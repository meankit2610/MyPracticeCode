
export const reducer = (state, action) => {
    switch (action.type) {
        case "INC_COUNT": {
            return {...state,count:state.count+action.payload}
        }
        case "DEC_COUNT": {
            return {...state, count: state.count - action.payload}
        }    
        case "ADD_TODOS": {
            return {...state, count: [...state.todos, action.payload]}
        }    
        default: {
            return state;
        }
    }
}