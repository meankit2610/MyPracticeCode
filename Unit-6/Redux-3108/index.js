import { addTodos, decCount, incCount } from "./action";
import { store } from "./store";

store.dispatch(incCount(1))
store.dispatch(incCount(1))
store.dispatch(incCount(1))
store.dispatch(incCount(1))

store.dispatch(decCount(2))

store.dispatch(addTodos({title:"Sleep", status:false}))
store.dispatch(addTodos({ title: "Eat", status: false }))

console.log(store.getState());