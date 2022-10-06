import { legacy_createStore as createStore, combineReducers } from "redux"
import { countReducer } from "./Counter/reducer";
import { todoReducer } from "./Todo/reducer";

const rootReducer = combineReducers({
    count: countReducer,
    todo: todoReducer,
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    
store.subscribe(() => {
    console.log(store.getState());
})    

