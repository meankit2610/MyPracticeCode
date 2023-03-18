// Since Redux is a state management framework, updating state is one of its core tasks.In Redux, all state updates are
// triggered by dispatching actions.An action is simply a JavaScript object that contains information about an action
// event that has occurred.The Redux store receives these action objects, then updates its state accordingly.Sometimes
// a Redux action also carries some data.For example, the action carries a username after a user logs in.While the data
// is optional, actions must carry a type property that specifies the 'type' of action that occurred.

// Define an action here:
let action = {
  type: "LOGIN"
}


// Define an Action Creator
// After creating an action, the next step is sending the action to the Redux store so it can update its state.In Redux,
//     you define action creators to accomplish this.An action creator is simply a JavaScript function that returns an
// action.In other words, action creators create objects that represent action events.

// const action = {
//   type: "LOGIN",
// };
// Define an action creator here:

const actionCreator = () => {
  return action;
};




// Dispatch an Action Event
// dispatch method is what you use to dispatch actions to the Redux store.Calling store.dispatch() and passing
//  the value returned from an action creator sends an action back to the store.

const store = Redux.createStore((state = { login: false }) => state);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

// Dispatch the action here:
store.dispatch(loginAction());