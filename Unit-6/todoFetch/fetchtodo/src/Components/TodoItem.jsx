import React from "react";

/* 
      title,
      status: false,
      id: uuid(),
*/

export const TodoItem = ({ id, title, status, handleDelete, handleUpdate }) => {
  return (
    <div>
      <p>
        {title} {"--->"} {status ? "COMPLETED" : "NOT COMPLETED"}{" "}
      </p>
      {/* DELETE TODO */}
      <button onClick={() => handleDelete(id)}>DELETE TODO</button>
      {/* UPDATE TODO */}
      <button onClick={() => handleUpdate(id)}>UPDATE TODO</button>
    </div>
  );
};
