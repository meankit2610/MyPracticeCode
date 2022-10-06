import {
  UPDATE_TODOS,
  UPDATE_TODOS_ERROR,
  UPDATE_TODOS_LOADING
} from "./action";

const initState = {
  loading: false,
  todos: [],
  error: false
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case UPDATE_TODOS_LOADING:
      return {
        ...state,
        loading: true,
        error: false
      };
    case UPDATE_TODOS:
      return {
        loading: false,
        todos: [...payload],
        error: false
      };
    case UPDATE_TODOS_ERROR:
      return {
        loading: false,
        error: false
      };
    default:
      return state;
  }
};
