import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import {
  updateTodosLoading,
  updateTodos,
  updateTodosError,
} from "../Redux/action";

export const Todo = () => {
  const { loading, todos, error } = useSelector((state) => state);

  const dispatch = useDispatch();

  // network call
  // get all the todos that exists on server
  // update my redux store with those todos
  // that inturn will update my UI

  const getTodos = () => {
    dispatch(updateTodosLoading());
    fetch("http://localhost:8080/todos")
      .then((res) => res.json())
      .then((res) => dispatch(updateTodos(res)))
      // .then((res) => dispatch(res,"res1"))
      .catch(() => dispatch(updateTodosError()));
    // .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    console.log("enter delete");
    fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE",
    }).then(() => getTodos());
    console.log("exit delete");
  };

  const handleUpdate = (id) => {
    const payload = {
      status: !todos.find((item) => item.id === id).status,
    };
    fetch(`http://localhost:8080/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => getTodos());
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <TodoInput getTodos={getTodos} />
      <br />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error.. Something went wrong</div>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))
      )}
    </div>
  );
};
