import { useState } from "react";

export const TodoInput = ({ getTodos }) => {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    const payload = {
      title,
      status: false,
    };

    fetch(`http://localhost:8080/todos`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => getTodos());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="ADD NEW TODOS"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>ADD TODOS</button>
    </div>
  );
};
