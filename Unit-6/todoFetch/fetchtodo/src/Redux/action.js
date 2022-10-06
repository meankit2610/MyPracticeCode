export const UPDATE_TODOS_LOADING = "UPDATE_TODOS_LOADING";
export const UPDATE_TODOS = "UPDATE_TODOS";
export const UPDATE_TODOS_ERROR = "UPDATE_TODOS_ERROR";

export const updateTodosLoading = () => ({
  type: UPDATE_TODOS_LOADING
});

export const updateTodos = (payload) => ({
  type: UPDATE_TODOS,
  payload
});

export const updateTodosError = (payload) => ({
  type: UPDATE_TODOS_ERROR,
  payload
});

// action creators are function which returns object;

// now we create an action creator which returns function here;

// export const updateTodosData = () => (dispatch) => {
//   dispatch(updateTodosLoading());
//   fetch(`http://localhost:8080/todos`)
//     .then((res) => res.json())
//     .then((res) => dispatch(updateTodos(res)))
//     .catch(() => dispatch(updateTodosError()));
// };

// END GOAL IS

// INSTEAD OF HAVING TO DISPATCH THERE ACTION CREATORS IN TODO

// I WILL DISPATCH ONE ACTION CREATOR
// THAT ACTION CREATOR WILL IN TURN DISPATCH
// THOSE THREE ACTION CREATORS;
